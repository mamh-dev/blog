// SideBar 생성을 위한 라우트 리스트
const routes = ['Introduce', 'Study']
const createSidebar = () => {
    const sidebar = {}
    // 각 디렉토리에 정의된 Sidebar 설정을 로드합니다.
    // 본 예시에선 Introduce/index.js, Study/index.js를 로드하여 Sidebar Config Object를 구성합니다.
    for (const route of routes) {
      Object.assign(sidebar, require('../' + route))
    }
    return sidebar
  }

module.exports = {
    title: 'VuePress',
    description: 'Hello VuePress',
    themeConfig: {
        // Navigation, Sidebar 노출을 위한 라우트 설정
        nav: [
            { text: 'Introduce', link: '/Introduce/' },
            { text: 'Study', link: '/Study/' }
        ],
        sidebar: createSidebar()    // 각 상위 routes의 하위 routes가 포함된 sidebar config 생성
    },
    dest: 'dist/docs'   // Build 시 Path 지정
}