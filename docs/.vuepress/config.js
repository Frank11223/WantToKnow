module.exports = {
  title: 'WantToKnow',
  themeConfig: {
    docsDir: 'docs',
    sidebar: {
      '/js/': [
        {
          title: '数据类型',
          collapsable: false, 
          children: [
            ['js_data_type', '数据类型'],
          ],
        },
      ],
    },
  },
}
