<template>
    <div class="notice-container" v-if="notice">
      <div class="notice-header">
        <h2>공지 조회</h2>
        <button class="close-btn" @click="closeNotice">✖</button>
      </div>
      <div class="notice-info">
        <div class="info-group">
          <label>공지 코드:</label>
          <span>{{ notice.noticeCodePk }}</span>
        </div>
        <div class="info-group">
          <label>작성자 직원 코드:</label>
          <span>{{ notice.employeeCodeFk }}</span>
        </div>
        <div class="info-group">
          <label>작성일자:</label>
          <span>{{ notice.noticePostedDate }}</span>
        </div>
        <div class="info-group">
          <label>작성자 직원명:</label>
          <span>{{ notice.picemployeeName }}</span>
        </div>
      </div>
      <div class="notice-content">
        <div class="content-group">
          <label>공지 제목</label>
          <input type="text" v-model="notice.noticeTitle" />
        </div>
        <div class="content-group">
          <label>공지 내용</label>
          <textarea v-model="notice.noticeContent"></textarea>
        </div>
      </div>
      <div class="notice-actions">
        <button @click="modifyNotice">수정</button>
        <button @click="deleteNotice">삭제</button>
      </div>
    </div>
    <div v-else>
      <p>공지사항을 불러오는 중...</p>
    </div>
  </template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const notice = ref(null);
const noticeCodePk = route.params;

console.log('noticeCodePk',noticeCodePk);

const fetchNotice = async () => {
  try {
    const response = await axios.get(`http://localhost:8888/sales/notices/${noticeCodePk.id}/notice`);
    console.log('response',response)
    notice.value = response.data;
  } catch (error) {
    console.error('Error fetching notice:', error);
  }
};

const closeNotice = () => {
  router.push('/');
};

const modifyNotice = async () => {
  try {
    await axios.put(`http://localhost:8888/sales/notices/${noticeCodePk}/notice`, notice.value);
    alert('공지사항이 저장되었습니다.');
  } catch (error) {
    console.error('Error saving notice:', error);
    alert('공지사항 저장 중 오류가 발생했습니다.');
  }
};

const deleteNotice = async () => {
  try {
    await axios.delete(`http://localhost:8888/notices/${noticeCodePk}/notice`);
    alert('공지사항이 삭제되었습니다.');
    router.push('/');
  } catch (error) {
    console.error('Error deleting notice:', error);
    alert('공지사항 삭제 중 오류가 발생했습니다.');
  }
};

onMounted(() => {
  fetchNotice();
});
</script>

<style scoped>
.notice-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}

.notice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notice-header h2 {
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.notice-info, .notice-content {
  margin-top: 20px;
}

.info-group, .content-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.info-group label, .content-group label {
  width: 120px;
  font-weight: bold;
}

.info-group span {
  flex: 1;
  text-align: left;
}

.content-group input, .content-group textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 150px;
  resize: none;
}

.notice-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.notice-actions button {
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.notice-actions button:first-of-type {
  background-color: #4caf50;
  color: white;
}

.notice-actions button:last-of-type {
  background-color: #f44336;
  color: white;
}
</style>