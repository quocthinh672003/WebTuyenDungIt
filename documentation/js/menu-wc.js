'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-basic documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-671941e7072cfd50138a8f9456599be1eb13397213cd23953a766f0e2d356850384cecf9f45e99ab4839bd73d94161021041406cf01a6ed5e04cad72a6c825d6"' : 'data-bs-target="#xs-controllers-links-module-AppModule-671941e7072cfd50138a8f9456599be1eb13397213cd23953a766f0e2d356850384cecf9f45e99ab4839bd73d94161021041406cf01a6ed5e04cad72a6c825d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-671941e7072cfd50138a8f9456599be1eb13397213cd23953a766f0e2d356850384cecf9f45e99ab4839bd73d94161021041406cf01a6ed5e04cad72a6c825d6"' :
                                            'id="xs-controllers-links-module-AppModule-671941e7072cfd50138a8f9456599be1eb13397213cd23953a766f0e2d356850384cecf9f45e99ab4839bd73d94161021041406cf01a6ed5e04cad72a6c825d6"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-671941e7072cfd50138a8f9456599be1eb13397213cd23953a766f0e2d356850384cecf9f45e99ab4839bd73d94161021041406cf01a6ed5e04cad72a6c825d6"' : 'data-bs-target="#xs-injectables-links-module-AppModule-671941e7072cfd50138a8f9456599be1eb13397213cd23953a766f0e2d356850384cecf9f45e99ab4839bd73d94161021041406cf01a6ed5e04cad72a6c825d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-671941e7072cfd50138a8f9456599be1eb13397213cd23953a766f0e2d356850384cecf9f45e99ab4839bd73d94161021041406cf01a6ed5e04cad72a6c825d6"' :
                                        'id="xs-injectables-links-module-AppModule-671941e7072cfd50138a8f9456599be1eb13397213cd23953a766f0e2d356850384cecf9f45e99ab4839bd73d94161021041406cf01a6ed5e04cad72a6c825d6"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-fc74781fc45ea1fc8a34451a90b22448d29c882fe48bb26a5c47da7d185d9146c5c8056928969d2996754387ab5b2ed3c688fc7c945384ee0fdd39087321c612"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-fc74781fc45ea1fc8a34451a90b22448d29c882fe48bb26a5c47da7d185d9146c5c8056928969d2996754387ab5b2ed3c688fc7c945384ee0fdd39087321c612"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-fc74781fc45ea1fc8a34451a90b22448d29c882fe48bb26a5c47da7d185d9146c5c8056928969d2996754387ab5b2ed3c688fc7c945384ee0fdd39087321c612"' :
                                            'id="xs-controllers-links-module-AuthModule-fc74781fc45ea1fc8a34451a90b22448d29c882fe48bb26a5c47da7d185d9146c5c8056928969d2996754387ab5b2ed3c688fc7c945384ee0fdd39087321c612"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-fc74781fc45ea1fc8a34451a90b22448d29c882fe48bb26a5c47da7d185d9146c5c8056928969d2996754387ab5b2ed3c688fc7c945384ee0fdd39087321c612"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-fc74781fc45ea1fc8a34451a90b22448d29c882fe48bb26a5c47da7d185d9146c5c8056928969d2996754387ab5b2ed3c688fc7c945384ee0fdd39087321c612"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-fc74781fc45ea1fc8a34451a90b22448d29c882fe48bb26a5c47da7d185d9146c5c8056928969d2996754387ab5b2ed3c688fc7c945384ee0fdd39087321c612"' :
                                        'id="xs-injectables-links-module-AuthModule-fc74781fc45ea1fc8a34451a90b22448d29c882fe48bb26a5c47da7d185d9146c5c8056928969d2996754387ab5b2ed3c688fc7c945384ee0fdd39087321c612"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-f62f5f7b488f51daf3ffaa446c69081bc318502a096d59d63ff68ddf5cc43a0cffcf7f1f80698d44a95a2895685fdc622b2120ebfaf666825a356e53e1440513"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-f62f5f7b488f51daf3ffaa446c69081bc318502a096d59d63ff68ddf5cc43a0cffcf7f1f80698d44a95a2895685fdc622b2120ebfaf666825a356e53e1440513"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-f62f5f7b488f51daf3ffaa446c69081bc318502a096d59d63ff68ddf5cc43a0cffcf7f1f80698d44a95a2895685fdc622b2120ebfaf666825a356e53e1440513"' :
                                            'id="xs-controllers-links-module-CompaniesModule-f62f5f7b488f51daf3ffaa446c69081bc318502a096d59d63ff68ddf5cc43a0cffcf7f1f80698d44a95a2895685fdc622b2120ebfaf666825a356e53e1440513"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-f62f5f7b488f51daf3ffaa446c69081bc318502a096d59d63ff68ddf5cc43a0cffcf7f1f80698d44a95a2895685fdc622b2120ebfaf666825a356e53e1440513"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-f62f5f7b488f51daf3ffaa446c69081bc318502a096d59d63ff68ddf5cc43a0cffcf7f1f80698d44a95a2895685fdc622b2120ebfaf666825a356e53e1440513"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-f62f5f7b488f51daf3ffaa446c69081bc318502a096d59d63ff68ddf5cc43a0cffcf7f1f80698d44a95a2895685fdc622b2120ebfaf666825a356e53e1440513"' :
                                        'id="xs-injectables-links-module-CompaniesModule-f62f5f7b488f51daf3ffaa446c69081bc318502a096d59d63ff68ddf5cc43a0cffcf7f1f80698d44a95a2895685fdc622b2120ebfaf666825a356e53e1440513"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-71c435dcff3af8c2b2c7b6cfa54129b9b08b6ce8310d7c09c3ce3d73ecba54df618ccef32c6cab5b24b07cc5b5d6dea2468456693d3c97d522be6c16b13512fc"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-71c435dcff3af8c2b2c7b6cfa54129b9b08b6ce8310d7c09c3ce3d73ecba54df618ccef32c6cab5b24b07cc5b5d6dea2468456693d3c97d522be6c16b13512fc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-71c435dcff3af8c2b2c7b6cfa54129b9b08b6ce8310d7c09c3ce3d73ecba54df618ccef32c6cab5b24b07cc5b5d6dea2468456693d3c97d522be6c16b13512fc"' :
                                            'id="xs-controllers-links-module-DatabasesModule-71c435dcff3af8c2b2c7b6cfa54129b9b08b6ce8310d7c09c3ce3d73ecba54df618ccef32c6cab5b24b07cc5b5d6dea2468456693d3c97d522be6c16b13512fc"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-71c435dcff3af8c2b2c7b6cfa54129b9b08b6ce8310d7c09c3ce3d73ecba54df618ccef32c6cab5b24b07cc5b5d6dea2468456693d3c97d522be6c16b13512fc"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-71c435dcff3af8c2b2c7b6cfa54129b9b08b6ce8310d7c09c3ce3d73ecba54df618ccef32c6cab5b24b07cc5b5d6dea2468456693d3c97d522be6c16b13512fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-71c435dcff3af8c2b2c7b6cfa54129b9b08b6ce8310d7c09c3ce3d73ecba54df618ccef32c6cab5b24b07cc5b5d6dea2468456693d3c97d522be6c16b13512fc"' :
                                        'id="xs-injectables-links-module-DatabasesModule-71c435dcff3af8c2b2c7b6cfa54129b9b08b6ce8310d7c09c3ce3d73ecba54df618ccef32c6cab5b24b07cc5b5d6dea2468456693d3c97d522be6c16b13512fc"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-3f957d032a8feb6ec62e7f76d6dc631526eab78d6b5b944db93ebdc3b54c27903a2bf53af9947ab6afaa843692dfcc987b314e5fa0470d90d96b471675bfa500"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-3f957d032a8feb6ec62e7f76d6dc631526eab78d6b5b944db93ebdc3b54c27903a2bf53af9947ab6afaa843692dfcc987b314e5fa0470d90d96b471675bfa500"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-3f957d032a8feb6ec62e7f76d6dc631526eab78d6b5b944db93ebdc3b54c27903a2bf53af9947ab6afaa843692dfcc987b314e5fa0470d90d96b471675bfa500"' :
                                            'id="xs-controllers-links-module-FilesModule-3f957d032a8feb6ec62e7f76d6dc631526eab78d6b5b944db93ebdc3b54c27903a2bf53af9947ab6afaa843692dfcc987b314e5fa0470d90d96b471675bfa500"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-3f957d032a8feb6ec62e7f76d6dc631526eab78d6b5b944db93ebdc3b54c27903a2bf53af9947ab6afaa843692dfcc987b314e5fa0470d90d96b471675bfa500"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-3f957d032a8feb6ec62e7f76d6dc631526eab78d6b5b944db93ebdc3b54c27903a2bf53af9947ab6afaa843692dfcc987b314e5fa0470d90d96b471675bfa500"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-3f957d032a8feb6ec62e7f76d6dc631526eab78d6b5b944db93ebdc3b54c27903a2bf53af9947ab6afaa843692dfcc987b314e5fa0470d90d96b471675bfa500"' :
                                        'id="xs-injectables-links-module-FilesModule-3f957d032a8feb6ec62e7f76d6dc631526eab78d6b5b944db93ebdc3b54c27903a2bf53af9947ab6afaa843692dfcc987b314e5fa0470d90d96b471675bfa500"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-8f923fc33dfcc272155deebfe1a167e024f58448087cdc01eae78194f8b4a0bc2d3206cb1571b13cc4c82cce36eba94fa97414c4bb8bff833b495f6ec1973f82"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-8f923fc33dfcc272155deebfe1a167e024f58448087cdc01eae78194f8b4a0bc2d3206cb1571b13cc4c82cce36eba94fa97414c4bb8bff833b495f6ec1973f82"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-8f923fc33dfcc272155deebfe1a167e024f58448087cdc01eae78194f8b4a0bc2d3206cb1571b13cc4c82cce36eba94fa97414c4bb8bff833b495f6ec1973f82"' :
                                            'id="xs-controllers-links-module-HealthModule-8f923fc33dfcc272155deebfe1a167e024f58448087cdc01eae78194f8b4a0bc2d3206cb1571b13cc4c82cce36eba94fa97414c4bb8bff833b495f6ec1973f82"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' :
                                            'id="xs-controllers-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' :
                                        'id="xs-injectables-links-module-JobsModule-244326997148abb59eb88fab1b7282e67cd85c1a4a196dc455c1dc87f8846f09723ff7ef3bdf1025ffcfb37c3728f6143515e624b222056653fbda4ad91b4f5f"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-9b61c7380debdad2a997e8b0f198e9f4397d8cade6c1be1d0f4dadbc675644500f80bac5eb980706c06b3010541c5291c31a3bdd450f8fc56574e0aaca5e0ea3"' : 'data-bs-target="#xs-controllers-links-module-MailModule-9b61c7380debdad2a997e8b0f198e9f4397d8cade6c1be1d0f4dadbc675644500f80bac5eb980706c06b3010541c5291c31a3bdd450f8fc56574e0aaca5e0ea3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-9b61c7380debdad2a997e8b0f198e9f4397d8cade6c1be1d0f4dadbc675644500f80bac5eb980706c06b3010541c5291c31a3bdd450f8fc56574e0aaca5e0ea3"' :
                                            'id="xs-controllers-links-module-MailModule-9b61c7380debdad2a997e8b0f198e9f4397d8cade6c1be1d0f4dadbc675644500f80bac5eb980706c06b3010541c5291c31a3bdd450f8fc56574e0aaca5e0ea3"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-9b61c7380debdad2a997e8b0f198e9f4397d8cade6c1be1d0f4dadbc675644500f80bac5eb980706c06b3010541c5291c31a3bdd450f8fc56574e0aaca5e0ea3"' : 'data-bs-target="#xs-injectables-links-module-MailModule-9b61c7380debdad2a997e8b0f198e9f4397d8cade6c1be1d0f4dadbc675644500f80bac5eb980706c06b3010541c5291c31a3bdd450f8fc56574e0aaca5e0ea3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-9b61c7380debdad2a997e8b0f198e9f4397d8cade6c1be1d0f4dadbc675644500f80bac5eb980706c06b3010541c5291c31a3bdd450f8fc56574e0aaca5e0ea3"' :
                                        'id="xs-injectables-links-module-MailModule-9b61c7380debdad2a997e8b0f198e9f4397d8cade6c1be1d0f4dadbc675644500f80bac5eb980706c06b3010541c5291c31a3bdd450f8fc56574e0aaca5e0ea3"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-ce486775a3bc8588e7ba8057da4811eaafced56da052e18dfda74348589c41e6bcf9028726a2505d39c07c87b16b1c67258303cbd201b3d3a78e9b173c5ff4e3"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-ce486775a3bc8588e7ba8057da4811eaafced56da052e18dfda74348589c41e6bcf9028726a2505d39c07c87b16b1c67258303cbd201b3d3a78e9b173c5ff4e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-ce486775a3bc8588e7ba8057da4811eaafced56da052e18dfda74348589c41e6bcf9028726a2505d39c07c87b16b1c67258303cbd201b3d3a78e9b173c5ff4e3"' :
                                            'id="xs-controllers-links-module-PermissionsModule-ce486775a3bc8588e7ba8057da4811eaafced56da052e18dfda74348589c41e6bcf9028726a2505d39c07c87b16b1c67258303cbd201b3d3a78e9b173c5ff4e3"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-ce486775a3bc8588e7ba8057da4811eaafced56da052e18dfda74348589c41e6bcf9028726a2505d39c07c87b16b1c67258303cbd201b3d3a78e9b173c5ff4e3"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-ce486775a3bc8588e7ba8057da4811eaafced56da052e18dfda74348589c41e6bcf9028726a2505d39c07c87b16b1c67258303cbd201b3d3a78e9b173c5ff4e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-ce486775a3bc8588e7ba8057da4811eaafced56da052e18dfda74348589c41e6bcf9028726a2505d39c07c87b16b1c67258303cbd201b3d3a78e9b173c5ff4e3"' :
                                        'id="xs-injectables-links-module-PermissionsModule-ce486775a3bc8588e7ba8057da4811eaafced56da052e18dfda74348589c41e6bcf9028726a2505d39c07c87b16b1c67258303cbd201b3d3a78e9b173c5ff4e3"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-607de07bf39f6eecb761b6864fa3b98e25fd13e2e23252d7700cdb9bbaac5defac84cf6a0d0ae9a861d82741f134416906e2f19b1669582452a5f74b4b32e8ae"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-607de07bf39f6eecb761b6864fa3b98e25fd13e2e23252d7700cdb9bbaac5defac84cf6a0d0ae9a861d82741f134416906e2f19b1669582452a5f74b4b32e8ae"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-607de07bf39f6eecb761b6864fa3b98e25fd13e2e23252d7700cdb9bbaac5defac84cf6a0d0ae9a861d82741f134416906e2f19b1669582452a5f74b4b32e8ae"' :
                                            'id="xs-controllers-links-module-ResumesModule-607de07bf39f6eecb761b6864fa3b98e25fd13e2e23252d7700cdb9bbaac5defac84cf6a0d0ae9a861d82741f134416906e2f19b1669582452a5f74b4b32e8ae"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-607de07bf39f6eecb761b6864fa3b98e25fd13e2e23252d7700cdb9bbaac5defac84cf6a0d0ae9a861d82741f134416906e2f19b1669582452a5f74b4b32e8ae"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-607de07bf39f6eecb761b6864fa3b98e25fd13e2e23252d7700cdb9bbaac5defac84cf6a0d0ae9a861d82741f134416906e2f19b1669582452a5f74b4b32e8ae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-607de07bf39f6eecb761b6864fa3b98e25fd13e2e23252d7700cdb9bbaac5defac84cf6a0d0ae9a861d82741f134416906e2f19b1669582452a5f74b4b32e8ae"' :
                                        'id="xs-injectables-links-module-ResumesModule-607de07bf39f6eecb761b6864fa3b98e25fd13e2e23252d7700cdb9bbaac5defac84cf6a0d0ae9a861d82741f134416906e2f19b1669582452a5f74b4b32e8ae"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-2514e9c6d2cf08dd5b5d7122179a1754dfe3692f72b1615d468b4fdacd379b8a886399115d539ffa1d0db862cc41e1aac23109f2b33d2498faa19641c2d1350e"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-2514e9c6d2cf08dd5b5d7122179a1754dfe3692f72b1615d468b4fdacd379b8a886399115d539ffa1d0db862cc41e1aac23109f2b33d2498faa19641c2d1350e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-2514e9c6d2cf08dd5b5d7122179a1754dfe3692f72b1615d468b4fdacd379b8a886399115d539ffa1d0db862cc41e1aac23109f2b33d2498faa19641c2d1350e"' :
                                            'id="xs-controllers-links-module-RolesModule-2514e9c6d2cf08dd5b5d7122179a1754dfe3692f72b1615d468b4fdacd379b8a886399115d539ffa1d0db862cc41e1aac23109f2b33d2498faa19641c2d1350e"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-2514e9c6d2cf08dd5b5d7122179a1754dfe3692f72b1615d468b4fdacd379b8a886399115d539ffa1d0db862cc41e1aac23109f2b33d2498faa19641c2d1350e"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-2514e9c6d2cf08dd5b5d7122179a1754dfe3692f72b1615d468b4fdacd379b8a886399115d539ffa1d0db862cc41e1aac23109f2b33d2498faa19641c2d1350e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-2514e9c6d2cf08dd5b5d7122179a1754dfe3692f72b1615d468b4fdacd379b8a886399115d539ffa1d0db862cc41e1aac23109f2b33d2498faa19641c2d1350e"' :
                                        'id="xs-injectables-links-module-RolesModule-2514e9c6d2cf08dd5b5d7122179a1754dfe3692f72b1615d468b4fdacd379b8a886399115d539ffa1d0db862cc41e1aac23109f2b33d2498faa19641c2d1350e"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-25f7db1f9c75372523a5ceda655dd5d51f47835767552e8de96354b5c99f2ff3328f41947dd5bb150f87301c23add93fac6ccf02bd4e34131b6c9f20ab8b910d"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-25f7db1f9c75372523a5ceda655dd5d51f47835767552e8de96354b5c99f2ff3328f41947dd5bb150f87301c23add93fac6ccf02bd4e34131b6c9f20ab8b910d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-25f7db1f9c75372523a5ceda655dd5d51f47835767552e8de96354b5c99f2ff3328f41947dd5bb150f87301c23add93fac6ccf02bd4e34131b6c9f20ab8b910d"' :
                                            'id="xs-controllers-links-module-SubscribersModule-25f7db1f9c75372523a5ceda655dd5d51f47835767552e8de96354b5c99f2ff3328f41947dd5bb150f87301c23add93fac6ccf02bd4e34131b6c9f20ab8b910d"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-25f7db1f9c75372523a5ceda655dd5d51f47835767552e8de96354b5c99f2ff3328f41947dd5bb150f87301c23add93fac6ccf02bd4e34131b6c9f20ab8b910d"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-25f7db1f9c75372523a5ceda655dd5d51f47835767552e8de96354b5c99f2ff3328f41947dd5bb150f87301c23add93fac6ccf02bd4e34131b6c9f20ab8b910d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-25f7db1f9c75372523a5ceda655dd5d51f47835767552e8de96354b5c99f2ff3328f41947dd5bb150f87301c23add93fac6ccf02bd4e34131b6c9f20ab8b910d"' :
                                        'id="xs-injectables-links-module-SubscribersModule-25f7db1f9c75372523a5ceda655dd5d51f47835767552e8de96354b5c99f2ff3328f41947dd5bb150f87301c23add93fac6ccf02bd4e34131b6c9f20ab8b910d"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-d9ef1b6f91de25de0f9748e64cd8810aa2846a5043fde5979638860a24c33a6cdcf4af9bf9e07845861c8c9e99b67f41aaf9ba8bf2d242b73177bccb3a0f7bc3"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-d9ef1b6f91de25de0f9748e64cd8810aa2846a5043fde5979638860a24c33a6cdcf4af9bf9e07845861c8c9e99b67f41aaf9ba8bf2d242b73177bccb3a0f7bc3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-d9ef1b6f91de25de0f9748e64cd8810aa2846a5043fde5979638860a24c33a6cdcf4af9bf9e07845861c8c9e99b67f41aaf9ba8bf2d242b73177bccb3a0f7bc3"' :
                                            'id="xs-controllers-links-module-UsersModule-d9ef1b6f91de25de0f9748e64cd8810aa2846a5043fde5979638860a24c33a6cdcf4af9bf9e07845861c8c9e99b67f41aaf9ba8bf2d242b73177bccb3a0f7bc3"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-d9ef1b6f91de25de0f9748e64cd8810aa2846a5043fde5979638860a24c33a6cdcf4af9bf9e07845861c8c9e99b67f41aaf9ba8bf2d242b73177bccb3a0f7bc3"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-d9ef1b6f91de25de0f9748e64cd8810aa2846a5043fde5979638860a24c33a6cdcf4af9bf9e07845861c8c9e99b67f41aaf9ba8bf2d242b73177bccb3a0f7bc3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-d9ef1b6f91de25de0f9748e64cd8810aa2846a5043fde5979638860a24c33a6cdcf4af9bf9e07845861c8c9e99b67f41aaf9ba8bf2d242b73177bccb3a0f7bc3"' :
                                        'id="xs-injectables-links-module-UsersModule-d9ef1b6f91de25de0f9748e64cd8810aa2846a5043fde5979638860a24c33a6cdcf4af9bf9e07845861c8c9e99b67f41aaf9ba8bf2d242b73177bccb3a0f7bc3"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCvDto.html" data-type="entity-link" >CreateUserCvDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/History.html" data-type="entity-link" >History</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatedBy.html" data-type="entity-link" >UpdatedBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});