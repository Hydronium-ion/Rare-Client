export const formatDate = (date: string): string => {
  const d = new Date(date);
  const now = Date.now();
  const diff = now - new Date(date).getTime();
  // less than 5 minutes
  if (diff < 1000 * 60 * 5) {
    return '방금 전';
  }

  if (diff < 1000 * 60 * 60) {
    // diff를 분으로 바꿔야함
    return `${diff}분 전`
  }

  if (diff < 1000 * 60 * 60 * 24) {
    // diff를 시간으로 바꿔야함
    return `${diff}시간 전`
  }
  if (diff < 1000 * 60 * 60 * 36) {
    return '어제';
  }
  return 'yyyy년 M월 d일';
};