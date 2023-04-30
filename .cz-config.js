module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat: ' },
    { value: 'fix', name: 'fix: ' },
    { value: 'docs', name: 'docs: ' },
    { value: 'style', name: 'style: ' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature，也不是修复bug)',
    },
    { value: 'perf', name: 'perf: ' },
    { value: 'test', name: 'test: ' },
    { value: 'chore', name: 'chore: ' },
    { value: 'revert', name: 'revert: ' },
    { value: 'build', name: 'build: ' },
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
  },
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72,
}
