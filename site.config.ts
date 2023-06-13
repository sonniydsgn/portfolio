import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd85ea000b3e5443fb199957b4261f735',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Алексей Калинин — Портфолио',
  domain: 'sonniydsgn.vercel.app',
  author: 'Алексей Калинин',

  // open graph metadata (optional)
  description: 'Дизайнер интерфейсов с любовью к разработке. Создаю, чтобы упрощать жизни людей. Постоянно стремлюсь к изучению нового',

  // social usernames (optional)
  github: 'sonniydsgn',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,
  isSearchEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/mamayapovar': '87df428ca25f4115b9e55c9c1198df14',
    '/books4designers': '3bc28dd324304e5995d2fb5f51df04d9',
    '/alivewater': 'a13f25e29804427dbce60ded10626673',
    '/price-list': '8f8c15f71630417392e141df96ca5522',
    '/about': 'd4285e9b710d4232934203597f8d863d',
    '/dev': 'd209ba7248c7478a9d228c79fb123639',
    '/graphdesign': '64c1cd58cd504c9c8e4e2c7f752ac111',
    '/': '#6dbad34251864bc7b3d6f4f6423ccb10',
    '/dev-myap': '08fba823beb347829cac64a7fe12fd54',
    '/dev-b4d': 'abe45dc61a774017a7f7f8e851627f3c',
    '/dev-catenergy': 'cat-energy-c88997393eb4431790cd3b1e8246c303',
    '/dev-hungry': 'hungry-012be175fdd942e394c4c05c99574ec7',
    '/dev-centerlogistic': 'center-logistic-f8583effaf764f3d9c9f916a4f2d0921',
    '/dev-laslesvpn': 'laslesvpn-30cb2944e45d433dbdddb6f35768d5af',
    '/dev-techgear': 'techgear-957a266a42ea4038856318570343082b',
    '/dev-bouncer': 'bouncer-d99319538baa4625aa19069e833213e9',
    '/dev-servion': 'servion-c94b3959d2bd43448af69a60364ad56d',
    '/dev-firecamp': 'firecamp-5049a1ca8f8c49ecb4d42a70f69404ac',
    '/dev-inteo': 'inteo-9cd4eb809277457385073561339fcef3'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
