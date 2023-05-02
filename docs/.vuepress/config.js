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
            ['browser', '浏览器渲染原理'],
            ['event_loop', '事件循环']
          ],
        },
      ],
    },
  },
}
