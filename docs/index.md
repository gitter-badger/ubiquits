---
layout: home.hbs
title: Ubiquits
description: Full stack isomorphic typescript framework.
---

## Roadmap

### Alpha release (feature complete) [TBC]
- [ ] Angular Universal (server side prerendering) integration
- [ ] Docker deployment
- [ ] Database migrations
- [ ] Email sending
- [ ] Custom middleware registration
- [ ] Queue handling
- [ ] Database seeding from `MockModelProvider`s
- [ ] Full validation decorator complement
- [ ] 100% Code coverage

### Developer Preview [June 17th]
- [ ] Model hydration and mocking
- [ ] `BaseResourceController` implementation with CRUD routes
- [ ] Post-initialization cli tour
- [ ] Full stack demo in quickstart
- [ ] Feature page in docs
- [ ] FAQ page in docs

### Sprint 0 [June 10th]
- [x] Full stack proof of concept
  - [x] Backend dependency injection with `@angular/core`
  - [x] Angular 2 compiling with webpack
  - [x] `webpack` watcher for browser & common changes with livereload
  - [x] `nodemon` watcher for server & common changes
  - [x] Compilation to es2015 for browser on build
  - [x] Compilation to es2015 for api on build
  - [x] Output consumable by `typings`
  - [x] Source mapping for api debugger
  - [x] Full stack debug breakpoints in Webstorm
  - [x] Live reloading browser
  - [x] Live restarting server
  - [x] Route registration with `@Action` decorator
  - [x] `docker-compose.json` running postgres db
  - [x] Connection to database from localhost with `Sequelize`
  - [x] Testing framework for both frontend and backend
  - [x] Travis Ci automated testing
  - [x] Coverage results remapped to typescript, pushed to coveralls
  - [x] Abstract and concrete `@injectable` implementation of `Logger` class/interface
  - [x] Automated deployment to npm registry with version bump
- [x] Commandline interface
  - [x] `vantage` cli task runner integrating with `gulp` and `metalsmith` tasks
  - [x] Configuration file in parent project
  - [x] Extendable commands
  - [x] Shell connection to server runtime context
  - [x] Runtime task registration
  - [x] Initialization of new projects (quickstart)
- [x] Documentation framework
  - [x] File watcher/livereload server
  - [x] Typedoc integration
  - [x] Extendable styles, templates, assets
  - [x] Default collections for automatic navigation generation
