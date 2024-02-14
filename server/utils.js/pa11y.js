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
  console.log(uniqueCodes.size);
  return {
    accessible: uniqueCodes.size <= 8,
    countAprovedIssues: 38 - uniqueCodes.size,
  };
}

const defaultErrorResponse = (textError, url) => {
  return {
    data: { documentTitle: "", pageUrl: url, issues: [] },
    ok: false,
    issueCountByType: { error: 0, warning: 0, notice: 0 },
    accessible: false,
    countAprovedIssues: 0,
    error: textError,
  };
};

module.exports = {
  isAccessible,
  countIssuesByType,
  defaultResponse: defaultErrorResponse,
};
