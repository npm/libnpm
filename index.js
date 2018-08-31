'use strict'

module.exports = {
  manifest: require('pacote').manifest,
  tarball: require('pacote').tarball,
  extract: require('pacote').extract,
  packument: require('pacote').packument,
  hook: require('libnpmhook'),
  access: require('libnpmaccess'),
  search: require('libnpmsearch'),
  team: require('libnpmteam'),
  org: require('libnpmorg'),
  fetch: require('npm-registry-fetch'),
  login: require('npm-profile').login,
  adduser: require('npm-profile').adduser,
  profile: require('npm-profile'),
  publish: require('libnpmpublish').publish,
  unpublish: require('libnpmpublish').unpublish,
  runScript: require('npm-lifecycle')
}
