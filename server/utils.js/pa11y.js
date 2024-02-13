function countIssuesByType(issues) {
  const count = {
    error: 0,
    warning: 0,
    notice: 0,
  };
  issues.forEach((issue) => {
    count[issue.type]++;
  });
  return count;
}

function isAccessible(issues) {
  const uniqueCodes = new Set(issues.map((issue) => issue.code));
  return {
    isAccessible: uniqueCodes.size <= 8,
    countAprovedIssues: 38 - uniqueCodes.size,
  };
}

module.exports = {
  isAccessible,
  countIssuesByType,
};
