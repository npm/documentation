---
title: Changelog
github_repo: npm/cli
github_branch: release/v8
github_path: CHANGELOG.md
redirect_from:
  - /cli-documentation/v8/misc/changelog
  - /cli-documentation/v8/using-npm/changelog
  - /cli/v8/misc/changelog
---

# Changelog

## [8.19.4](https://github.com/npm/cli/compare/v8.19.3...v8.19.4) (2023-02-14)

### Documentation

* [`dd51f34`](https://github.com/npm/cli/commit/dd51f345c823121cba84d2765942909eb0375018) [#6155](https://github.com/npm/cli/pull/6155) don't redirect "npm config' to itself (#6155) (@ivanosevitch)

### Dependencies

* [`cfab523`](https://github.com/npm/cli/commit/cfab5232183d8ffb025b20d8c3581588b3e75f02) [#6166](https://github.com/npm/cli/pull/6166) `http-cache-semantics@4.1.1` (#6166)

## [8.19.3](https://github.com/npm/cli/compare/v8.19.2...v8.19.3) (2022-11-03)

### Bug Fixes

* [`26f3d0b`](https://github.com/npm/cli/commit/26f3d0b04fec438400d337c2d4ace218225b7ecb) [#5761](https://github.com/npm/cli/pull/5761) use hosted-git-info to parse registry urls (#5761) (@lukekarrys)

### Documentation

* [`bd92aa0`](https://github.com/npm/cli/commit/bd92aa03920aa04b20dc7087871a853c50c613e4) [#5753](https://github.com/npm/cli/pull/5753) name and version description change (#5753) (@dominikgorczyca)

### Dependencies

* [Workspace](https://github.com/npm/cli/compare/arborist-v5.6.2...arborist-v5.6.3): `@npmcli/arborist@5.6.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v4.0.13...libnpmexec-v4.0.14): `libnpmexec@4.0.14`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v3.0.4...libnpmfund-v3.0.5): `libnpmfund@3.0.5`

## [8.19.2](https://github.com/npm/cli/compare/v8.19.1...v8.19.2) (2022-09-13)

### Dependencies

* [Workspace](https://github.com/npm/cli/compare/arborist-v5.6.1...arborist-v5.6.2): `@npmcli/arborist@5.6.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v4.0.12...libnpmexec-v4.0.13): `libnpmexec@4.0.13`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v3.0.3...libnpmfund-v3.0.4): `libnpmfund@3.0.4`

## [8.19.1](https://github.com/npm/cli/compare/v8.19.0...v8.19.1) (2022-09-01)

### Bug Fixes

  * [`d60b43f`](https://github.com/npm/cli/commit/d60b43f3825452dd8b9b5879c287df232c9a8dc8) [#5438](https://github.com/npm/cli/pull/5438) fix: Turn off progress bar when using web based authorization (@sandeepmeduru)

## [8.19.0](https://github.com/npm/cli/compare/v8.18.0...v8.19.0) (2022-08-31)

### Features

  * [`d94a9f5`](https://github.com/npm/cli/commit/d94a9f56cce1de32bfd87f841d7678e8394d8ea6) [#5347](https://github.com/npm/cli/pull/5347) feat: add deprecation warnings to access commands (@wraithgar)

### Bug Fixes

  * [`bd2ae5d`](https://github.com/npm/cli/commit/bd2ae5d79eb8807bfca6075e98432c545a9ededa) [#5323](https://github.com/npm/cli/pull/5323) fix: linting (@wraithgar)

### Documentation

  * [`3569094`](https://github.com/npm/cli/commit/356909424f60a26d90faf25594085e79e93f09d5) [#5321](https://github.com/npm/cli/pull/5321) docs: fix link to dependency selectors page (@hghmn)
  * [`414667a`](https://github.com/npm/cli/commit/414667a1e6d7d7a3ab0cb64704c3aa696eae8715) [#5328](https://github.com/npm/cli/pull/5328) docs(dependency-selectors): fix Arborist example in docs (@kyle-west)

### Dependencies

  * [`1286f03`](https://github.com/npm/cli/commit/1286f03fe73dee9a447b13b662f0c5622ab6ec9e) [#5381](https://github.com/npm/cli/pull/5381) deps: `unique-filename@2.0.1`
  * [`d7e9a8e`](https://github.com/npm/cli/commit/d7e9a8ed5b7c1f9ca8d34e86388a134b2f48fc15) [#5381](https://github.com/npm/cli/pull/5381) deps: `ini@3.0.1`
  * [`2c4e387`](https://github.com/npm/cli/commit/2c4e38728f25fd32624df2eb5bbf61c2c40c8ad5) [#5381](https://github.com/npm/cli/pull/5381) deps: `hosted-git-info@5.1.0`
  * [`e401a81`](https://github.com/npm/cli/commit/e401a81c784556393bad57283337283a46bd57c5) [#5381](https://github.com/npm/cli/pull/5381) deps: `npm-bundled@2.0.1`
  * [`f4205e5`](https://github.com/npm/cli/commit/f4205e57d6c4ee5f2ff7d21ffc116ffc420d191e) [#5381](https://github.com/npm/cli/pull/5381) deps: `diff@5.1.0`
  * [`8f7abbe`](https://github.com/npm/cli/commit/8f7abbe4c3ceba451eb422c6328d623e7c8eeed5) [#5381](https://github.com/npm/cli/pull/5381) deps: `npm-packlist@5.1.3`
  * [`b12ac01`](https://github.com/npm/cli/commit/b12ac013226b7d86b5b1847d58eabbac2846b153) [#5381](https://github.com/npm/cli/pull/5381) deps: `npm-pick-manifest@7.0.2`
  * [`7fbf6f7`](https://github.com/npm/cli/commit/7fbf6f7825f76906ecdec79ab15595f9e2f7b784) [#5381](https://github.com/npm/cli/pull/5381) deps: `bin-links@3.0.3`
  * [`7c7f656`](https://github.com/npm/cli/commit/7c7f65629c3dd4fe7fd8254ac38914cf52ad31c2) [#5381](https://github.com/npm/cli/pull/5381) deps: `read-package-json@5.0.2`
  * [`26d2e55`](https://github.com/npm/cli/commit/26d2e551b250972caa550d56127810648a1663a1) [#5381](https://github.com/npm/cli/pull/5381) deps: `@npmcli/query@1.2.0`
  * [`a79ee00`](https://github.com/npm/cli/commit/a79ee00b530b765ed219e81de77c37057c373adf) [#5381](https://github.com/npm/cli/pull/5381) deps: `cacache@16.1.3`
  * [`2561822`](https://github.com/npm/cli/commit/25618229b7698aa8abbfcd2ef32024809f05a1a1) [#5378](https://github.com/npm/cli/pull/5378) deps: `@npmcli/config@4.2.2`
  * [`8ab12dc`](https://github.com/npm/cli/commit/8ab12dc32b26db770b868cf694cedab38f4e7460) [#5323](https://github.com/npm/cli/pull/5323) deps: `@npmcli/eslint-config@3.1.0`
  * `@npmcli/arborist@^5.6.1`
  * [`libnpmaccess@^6.0.4`](https://github.com/npm/cli/compare/libnpmaccess-v6.0.3...libnpmaccess-v6.0.4)
  * [`libnpmdiff@^4.0.5`](https://github.com/npm/cli/compare/libnpmdiff-v4.0.4...libnpmdiff-v4.0.5)
  * [`libnpmexec@^4.0.12`](https://github.com/npm/cli/compare/libnpmexec-v4.0.11...libnpmexec-v4.0.12)
  * [`libnpmfund@^3.0.3`](https://github.com/npm/cli/compare/libnpmfund-v3.0.2...libnpmfund-v3.0.3)
  * [`libnpmhook@^8.0.4`](https://github.com/npm/cli/compare/libnpmhook-v8.0.3...libnpmhook-v8.0.4)
  * [`libnpmorg@^4.0.4`](https://github.com/npm/cli/compare/libnpmorg-v4.0.3...libnpmorg-v4.0.4)
  * [`libnpmpack@^4.1.3`](https://github.com/npm/cli/compare/libnpmpack-v4.1.2...libnpmpack-v4.1.3)
  * [`libnpmpublish@^6.0.5`](https://github.com/npm/cli/compare/libnpmpublish-v6.0.4...libnpmpublish-v6.0.5)
  * [`libnpmsearch@^5.0.4`](https://github.com/npm/cli/compare/libnpmsearch-v5.0.3...libnpmsearch-v5.0.4)
  * [`libnpmteam@^4.0.4`](https://github.com/npm/cli/compare/libnpmteam-v4.0.3...libnpmteam-v4.0.4)
  * [`libnpmversion@^3.0.7`](https://github.com/npm/cli/compare/libnpmversion-v3.0.6...libnpmversion-v3.0.7)

## v8.18.0 (2022-08-17)

### Features

  * [`e6d4304`](https://github.com/npm/cli/commit/e6d4304bbd03e38dcf2c7467bb1e61b5740a4c73) [#5306](https://github.com/npm/cli/pull/5306) feat(arborist): add overridden getter to Node class ([@nlf](https://github.com/nlf))
  * [`d221f72`](https://github.com/npm/cli/commit/d221f72c00e13258469a748227a1d6f9953a5948) [#5306](https://github.com/npm/cli/pull/5306) feat(arborist): add :overridden pseudo selector ([@nlf](https://github.com/nlf))
  * [`0d4ed0f`](https://github.com/npm/cli/commit/0d4ed0fb1cd86edd827cac0b5367b73bb864a9bf) [#5306](https://github.com/npm/cli/pull/5306) feat(query): support :overridden pseudo selector ([@nlf](https://github.com/nlf))

### Bug Fixes

  * [`05d9bcf`](https://github.com/npm/cli/commit/05d9bcf7e557e0dbecbd80d4d1be332963761e69) [#5306](https://github.com/npm/cli/pull/5306) fix(ls): display overridden nodes ([@nlf](https://github.com/nlf))
  * [`cd2b1e6`](https://github.com/npm/cli/commit/cd2b1e6f5fbd85691465bbfe275c8baf1b6e2746) [#5306](https://github.com/npm/cli/pull/5306) fix(explain): display override information ([@nlf](https://github.com/nlf))
  * [`e5a9162`](https://github.com/npm/cli/commit/e5a9162a9dae9471e1ea77ad38baa02bb8d9852e) [#5297](https://github.com/npm/cli/pull/5297) fix: npm exec does not use script-shell option to run commands ([@lux01](https://github.com/lux01))
  * [`6eba131`](https://github.com/npm/cli/commit/6eba13164d84efb34554c7dddeb2dbfed063ac0a) [#5298](https://github.com/npm/cli/pull/5298) fix: don't prompt on `npm exec [directory]` ([@wraithgar](https://github.com/wraithgar))

### Documentation

  * [`bc66ffa`](https://github.com/npm/cli/commit/bc66ffa76005c882cc5fd237af87b7ca79375097) [#5304](https://github.com/npm/cli/pull/5304) docs: update --no-optional to --omit=optional ([@wraithgar](https://github.com/wraithgar))

### Dependencies

  * [`8460ccf`](https://github.com/npm/cli/commit/8460ccf8de0744e9b7228af682bbeb2eebb00e98) [#5311](https://github.com/npm/cli/pull/5311) deps: `libnpmexec@4.0.11`
  * [`41d0f51`](https://github.com/npm/cli/commit/41d0f51c34b24659d080beff0d53905975d34213) [#5310](https://github.com/npm/cli/pull/5310) deps: `@npmcli/arborist@5.6.0`
  * [`4e08d71`](https://github.com/npm/cli/commit/4e08d71e76fb2355dc93fcd7695e1ae20d6446af) [#5315](https://github.com/npm/cli/pull/5315) deps: `pacote@13.6.2`
  * [`46e8753`](https://github.com/npm/cli/commit/46e875306f551e3b89e2786d0fc8f0f3e4a8aa82) [#5316](https://github.com/npm/cli/pull/5316) deps: `npm-registry-fetch@13.3.1`
  * [`d39b2ee`](https://github.com/npm/cli/commit/d39b2ee671f2c7adf041b07a1d4e8bdc24ef7588) [#5318](https://github.com/npm/cli/pull/5318) deps: `normalize-package-data@4.0.1`
  * [`7d564bd`](https://github.com/npm/cli/commit/7d564bd73bcac909a922d88986e3a55fe343ca44) [#5318](https://github.com/npm/cli/pull/5318) deps: `make-fetch-happen@10.2.1`
  * [`5a56686`](https://github.com/npm/cli/commit/5a566863ca96f641fcecacd1ad20a7c837dccfeb) [#5318](https://github.com/npm/cli/pull/5318) deps: `@npmcli/git@3.0.2`
  * [`3c5a866`](https://github.com/npm/cli/commit/3c5a866cc6e58e660a0aedb8ce6fec258e523a21) [#5318](https://github.com/npm/cli/pull/5318) deps: `bin-links@3.0.2`
  * [`07536a4`](https://github.com/npm/cli/commit/07536a4be30ac3305fe4827335d621387bae3ca7) [#5318](https://github.com/npm/cli/pull/5318) deps: `@npmcli/fs@2.1.2`
  * [`8165501`](https://github.com/npm/cli/commit/81655017172eaedd346b3efe63c5975c803c82b4) [#5318](https://github.com/npm/cli/pull/5318) deps: `@npmcli/move-file@2.0.1`
  * [`cbee638`](https://github.com/npm/cli/commit/cbee6385a3231ea9ba02aa23d9dd110ba369217b) [#5318](https://github.com/npm/cli/pull/5318) deps: `cacache@16.1.2`
  * [`1f6daf5`](https://github.com/npm/cli/commit/1f6daf5b9df054952a47df01780039bd5da8f024) [#5318](https://github.com/npm/cli/pull/5318) deps: `write-file-atomic@4.0.2`
  * [`409468f`](https://github.com/npm/cli/commit/409468f25e783d0941e76c7a9a64a751a574176b) [#5318](https://github.com/npm/cli/pull/5318) deps: `minipass-fetch@2.1.1`

## v8.17.0 (2022-08-10)

### Features

  * [`96b6781`](https://github.com/npm/cli/commit/96b6781086143d7285c2c5bf7808c24b2c87e4dd) [#5263](https://github.com/npm/cli/pull/5263) feat(arborist): add option to forcibly skip loading a virtual tree ([@nlf](https://github.com/nlf))

### Bug Fixes

  * [`9078e27`](https://github.com/npm/cli/commit/9078e27cef0233d6fc81e0ca824a34fd7685d93c) [#5263](https://github.com/npm/cli/pull/5263) fix(query): tell arborist to load an actual tree, not a virtual one ([@nlf](https://github.com/nlf))
  * [`c992fd6`](https://github.com/npm/cli/commit/c992fd6757505974dc8e92a9e2886d2233e098eb) [#5273](https://github.com/npm/cli/pull/5273) fix: look up local command bins from local tree ([@wraithgar](https://github.com/wraithgar))
  * [`95ae9f2`](https://github.com/npm/cli/commit/95ae9f2e2555ef592777399bf8fee5206d77f41d) [#5253](https://github.com/npm/cli/pull/5253) fix: only try to run global bin if the bin name exists ([@wraithgar](https://github.com/wraithgar))
  * [`daaf461`](https://github.com/npm/cli/commit/daaf4619c85ecf62346770735cfa8e2ddecbef8b) [#5291](https://github.com/npm/cli/pull/5291) fix: ignore global prefix if --prefix is used ([@wraithgar](https://github.com/wraithgar))

### Documentation

  * [`f281ec8`](https://github.com/npm/cli/commit/f281ec8a1aec43439281a8fca4c255b0d94a0c94) [#5257](https://github.com/npm/cli/pull/5257) docs: Fix link syntax in `dependency-selectors.md` ([@aried3r](https://github.com/aried3r))

### Dependencies

  * [`741bccf`](https://github.com/npm/cli/commit/741bccf24ad1fa420a6c6182e04487abc02f8ccf) [#5284](https://github.com/npm/cli/pull/5284) deps: `@npmcli/config@4.2.1`
  * [`7f31b85`](https://github.com/npm/cli/commit/7f31b85db650c7a2b3b0577840251f5e25e63a01) [#5284](https://github.com/npm/cli/pull/5284) deps: `nopt@6.0.0`
  * [`2569d82`](https://github.com/npm/cli/commit/2569d82d0408e158b4b28cab6f23e1b7dc468553) [#5284](https://github.com/npm/cli/pull/5284) deps: `node-gyp@9.1.0`
  * [`a396f8d`](https://github.com/npm/cli/commit/a396f8dd0968971ddb6f491a0bc645132c82021a) [#5284](https://github.com/npm/cli/pull/5284) deps: `@npmcli/map-workspaces@2.0.4`
  * [`a9b5306`](https://github.com/npm/cli/commit/a9b5306627058b8869a6221a0c099493c206a3f2) [#5284](https://github.com/npm/cli/pull/5284) deps: `is-core-module@2.10.0`
  * [`786f753`](https://github.com/npm/cli/commit/786f753b0db49340a0e26ec8fb5425773a7f0558) [#5284](https://github.com/npm/cli/pull/5284) deps: `lru-cache@7.13.2`
  * [`7b702b6`](https://github.com/npm/cli/commit/7b702b6d490d37bdfa52b623dd42ce185846b1bc) [#5284](https://github.com/npm/cli/pull/5284) deps: `are-we-there-yet@3.0.1`
  * [`e74f99e`](https://github.com/npm/cli/commit/e74f99e7ccdfce1519cc45bb58054d94b748146c) [#5284](https://github.com/npm/cli/pull/5284) deps: `just-diff@5.1.1`
  * [`9833066`](https://github.com/npm/cli/commit/983306637579ab5c062878c0153671007cceea2b) [#5284](https://github.com/npm/cli/pull/5284) deps: `just-diff-apply@5.4.1`
  * [`4e5dd73`](https://github.com/npm/cli/commit/4e5dd732d7fe39490be1d9f8e81cbdba602c67fe) [#5284](https://github.com/npm/cli/pull/5284) deps: `socks@2.7.0`
  * [`d0f5995`](https://github.com/npm/cli/commit/d0f5995e0399a093c8037057150a922e56b1d7ca) [#5284](https://github.com/npm/cli/pull/5284) deps: `@npmcli/run-script@4.2.1`
  * [`8d870c5`](https://github.com/npm/cli/commit/8d870c56eed20f352695c3c06be07a656ada4ba7) [#5275](https://github.com/npm/cli/pull/5275) deps: `libnpmexec@4.0.10`

## v8.16.0 (2022-08-03)

### Features

  * [`3c024ac`](https://github.com/npm/cli/commit/3c024ace60904c69e61da00e1fb56c0c1735804a) [#5000](https://github.com/npm/cli/pull/5000) feat: add npm query cmd ([@ruyadorno](https://github.com/ruyadorno)) ([@wraithgar](https://github.com/wraithgar))
  * [`703dbbf`](https://github.com/npm/cli/commit/703dbbf2a8149dff72c848d60600889a76779828) [#4860](https://github.com/npm/cli/pull/4860) feat: add --replace-registry-host=<npmjs|always|never\> ([@fritzy](https://github.com/fritzy))

### Bug Fixes

  * [`eac1bf2`](https://github.com/npm/cli/commit/eac1bf26f28e9e8fc07e1350c3d7b14a94005ebf) [#5164](https://github.com/npm/cli/pull/5164) fix(ls): when filtering workspaces, make sure the edge has a to before checking if its a workspace ([@nlf](https://github.com/nlf))
  * [`47cc95d`](https://github.com/npm/cli/commit/47cc95d9ffb37fc8ff62a1d5554eab16d303aa43) [#5227](https://github.com/npm/cli/pull/5227) fix(arborist): use the sourceReference root rather than the node root for overrides ([@nlf](https://github.com/nlf))
  * [`050284d`](https://github.com/npm/cli/commit/050284d2abb6aa91a0f9ffad5b0c4f074e5dbf6d) [#5233](https://github.com/npm/cli/pull/5233) fix(arborist): pass the edge to fromPath in order to determine correct path ([@nlf](https://github.com/nlf))
  * [`d315ead`](https://github.com/npm/cli/commit/d315ead7a7f6d531eb57cfa4350bb08949c60997) [#5243](https://github.com/npm/cli/pull/5243) fix: gracefully exit login and publish commands on Ctrl+C (SIGINT) in the new webAuthn flow ([@neeldani](https://github.com/neeldani))
  * [`ea44995`](https://github.com/npm/cli/commit/ea449954844f21abbf984e09e421f0e03485a535) [#5244](https://github.com/npm/cli/pull/5244) fix: properly find locally/globally/npxCache packages ([@wraithgar](https://github.com/wraithgar))
  * [`19f1497`](https://github.com/npm/cli/commit/19f1497322411f1566885bd53e63dc39f0df27ea) [#5244](https://github.com/npm/cli/pull/5244) fix: use binPaths ([@wraithgar](https://github.com/wraithgar))
  * [`3b30af2`](https://github.com/npm/cli/commit/3b30af25e93665f5aa21897910a65d7f26bbd066) [#5244](https://github.com/npm/cli/pull/5244) fix: fix exec tests and  clean up workspace-location-msg ([@wraithgar](https://github.com/wraithgar))
  * [`8233fca`](https://github.com/npm/cli/commit/8233fca44321186c485964d26aa3c7c43eafff3d) [#5248](https://github.com/npm/cli/pull/5248) fix(arborist): fix bare attribute queries ([@darcyclarke](https://github.com/darcyclarke))
  * [`19a8346`](https://github.com/npm/cli/commit/19a834610d154f36748536b27aed13bfdb5ee748) [#5250](https://github.com/npm/cli/pull/5250) fix: properly find and run global scoped packages ([@wraithgar](https://github.com/wraithgar))

### Documentation

  * [`a6153cf`](https://github.com/npm/cli/commit/a6153cfd2b0764e69d103b33af6b42978b0403f4) [#5240](https://github.com/npm/cli/pull/5240) docs: Use the full proper name of Travis CI ([@tnir](https://github.com/tnir))

### Dependencies

  * [`fd030c8`](https://github.com/npm/cli/commit/fd030c86b1e01b7df1b9d73fda07496742a4737f) [#5245](https://github.com/npm/cli/pull/5245) deps: `npm-profile@6.2.1`
  * [`c18dbc4`](https://github.com/npm/cli/commit/c18dbc4393491e02532d698351747307848d2e20) [#5244](https://github.com/npm/cli/pull/5244) deps: add `@npmcli/fs@2.1.1`
  * [`cd6bafd`](https://github.com/npm/cli/commit/cd6bafdfbbd7a054709c11850b58f7dbc26eb8da) [#5244](https://github.com/npm/cli/pull/5244) deps: add `semver@7.3.7`
  * [`d0be9a2`](https://github.com/npm/cli/commit/d0be9a2bb53e74b30e13751afd1f6924990c8422) [#5244](https://github.com/npm/cli/pull/5244) deps: `@npmcli/run-script@4.2.0`
  * [`d55007d`](https://github.com/npm/cli/commit/d55007d9c535b17612a07a7a58cb6be94eedf77a) [#5247](https://github.com/npm/cli/pull/5247) deps: `@npmcli/query@1.1.1`
  * [`c650a29`](https://github.com/npm/cli/commit/c650a29a664aa303d8b8761dcf50236baf4bb4ca) [#5241](https://github.com/npm/cli/pull/5241) deps: `@npmcli/arborist@5.4.0`
  * [`4b7b48b`](https://github.com/npm/cli/commit/4b7b48befdca90e0114f4c64eac1d96fea1cc191) [#5246](https://github.com/npm/cli/pull/5246) deps: `libnpmexec@4.0.9`

## v8.15.1 (2022-07-27)

### Bug Fixes

  * [`9905d0e`](https://github.com/npm/cli/commit/9905d0e24c162c3f6cc006fa86b4c9d0205a4c6f) [#5197](https://github.com/npm/cli/pull/5197) fix: don't fail immediately if cache dir is not accessible ([@lukekarrys](https://github.com/lukekarrys))
  * [`0e3660e`](https://github.com/npm/cli/commit/0e3660eb39bd12a25517d745701bf841811b4623) [#5206](https://github.com/npm/cli/pull/5206) fix(init): allow for spec on scope-only arg ([@wraithgar](https://github.com/wraithgar))
  * [`62b95a0`](https://github.com/npm/cli/commit/62b95a04337661e3fa17093708b57000054442d9) [#5122](https://github.com/npm/cli/pull/5122) fix: allow hash character in paths ([@AgainPsychoX](https://github.com/AgainPsychoX))

### Documentation

  * [`f9abee7`](https://github.com/npm/cli/commit/f9abee79abe541226a249f50bdeec41317dd5712) [#5205](https://github.com/npm/cli/pull/5205) docs: update commit-ish default branch ([@dijonkitchen](https://github.com/dijonkitchen))
  * [`77bf2e1`](https://github.com/npm/cli/commit/77bf2e10236b72613101ac21d151f5974240f3aa) [#5218](https://github.com/npm/cli/pull/5218) docs: update npm-ls.md ([@MapleCCC](https://github.com/MapleCCC))
  * [`de40c31`](https://github.com/npm/cli/commit/de40c31d1fe7521ffbc4e22fd233b18eca149afe) [#5207](https://github.com/npm/cli/pull/5207) docs: sync ci params with install ([@wraithgar](https://github.com/wraithgar))
  * [`4d1d8a9`](https://github.com/npm/cli/commit/4d1d8a9561000064fe765ba31a3ad21832721c59) [#5221](https://github.com/npm/cli/pull/5221) docs: describe implicit workspace and prefix configuration ([@fritzy](https://github.com/fritzy)) ([@lukekarrys](https://github.com/lukekarrys)) ([@wraithgar](https://github.com/wraithgar))

### Dependencies

  * [`3bbb293`](https://github.com/npm/cli/commit/3bbb2931d09df66186108760353b2992171b057f) [#5223](https://github.com/npm/cli/pull/5223) deps: `@npmcli/arborist@5.3.1`

## v8.15.0 (2022-07-20)

### Features

  * [`5ef53ee`](https://github.com/npm/cli/commit/5ef53eedad2871a32611f47001e1c9ca9b813c07) [#5160](https://github.com/npm/cli/pull/5160) feat: accept registry-scoped certfile and keyfile as credentials ([@jenseng](https://github.com/jenseng))
  * [`c8bdb4a`](https://github.com/npm/cli/commit/c8bdb4a2517cf69cccf9bfe5bd5375a5e3d4b5b1) feat: Support pure web authentication for commands ([@jumoel](https://github.com/jumoel)) ([@ljharb](https://github.com/ljharb)) ([@hfaulds](https://github.com/hfaulds)) ([@sandeepmeduru](https://github.com/sandeepmeduru))

### Bug Fixes

  * [`9c590fa`](https://github.com/npm/cli/commit/9c590fac8b9b649b3ab7203c48a0abce89e6f3e9) [#5172](https://github.com/npm/cli/pull/5172) fix: disable progress bar on publish ([@wraithgar](https://github.com/wraithgar))
  * [`2fa3271`](https://github.com/npm/cli/commit/2fa3271ba37a58767307cf0105424b3c0b4ba7fe) [#5196](https://github.com/npm/cli/pull/5196) fix: add missing ` in adduser warning ([@MylesBorins](https://github.com/MylesBorins))

### Documentation

  * [`7efad06`](https://github.com/npm/cli/commit/7efad065ed4e7bc56e14e94cdcb21f71d547dd9e) [#5168](https://github.com/npm/cli/pull/5168) docs: Update audit signatures cmd ([@feelepxyz](https://github.com/feelepxyz))
  * [`8ab5fca`](https://github.com/npm/cli/commit/8ab5fcabbf9317df096bc727c49a98cf87dda560) [#5171](https://github.com/npm/cli/pull/5171) docs: correct bundledDependencies -\> bundleDependencies ([@nlf](https://github.com/nlf))

### Dependencies

  * [`64fe64b`](https://github.com/npm/cli/commit/64fe64b74bc66635771ae65003ccc67be5853929) [#5187](https://github.com/npm/cli/pull/5187) deps: `@npmcli/config@4.2.0`
  * [`51b12a0`](https://github.com/npm/cli/commit/51b12a085e087609c99befccfd6a98ef8a9919d0) [#5187](https://github.com/npm/cli/pull/5187) deps: `npm-registry-fetch@13.3.0`
  * [`3ae1b81`](https://github.com/npm/cli/commit/3ae1b814aa557ccb5b639a57715f67119754ea76) [#5190](https://github.com/npm/cli/pull/5190) deps: `make-fetch-happen@10.2.0`

## v8.14.0 (2022-07-13)

### Features

  * [`f032e1c`](https://github.com/npm/cli/commit/f032e1c0ada062e2139c8f057b24abb1ce2e4a33) [#4827](https://github.com/npm/cli/pull/4827) feat: add npm audit signatures ([@feelepxyz](https://github.com/feelepxyz))
  * [`e8102c1`](https://github.com/npm/cli/commit/e8102c1aae65a18e41253fbcdffe2eff0bedae53) [#5076](https://github.com/npm/cli/pull/5076) feat: Add `web` auth type ([@jumoel](https://github.com/jumoel))
  * [`e9b4214`](https://github.com/npm/cli/commit/e9b4214e1ddb1ad79fe6826cf2ce7ba385f0c274) [#5094](https://github.com/npm/cli/pull/5094) feat(arborist): add support for dependencies script ([@nlf](https://github.com/nlf))
  * [`c6c4ba3`](https://github.com/npm/cli/commit/c6c4ba3b62e2a0896a48329f4c7e13d9e44a2f80) [#5149](https://github.com/npm/cli/pull/5149) feat: notify on adduser of upcoming cmds, login and register ([@fritzy](https://github.com/fritzy))
  * [`e58f02f`](https://github.com/npm/cli/commit/e58f02f5e8263bf86ae1f07a863098d445e6d0cd) [#5149](https://github.com/npm/cli/pull/5149) feat: warn on config --auth-type=sso/saml/oauth, undeprecate --auth-type ([@fritzy](https://github.com/fritzy))

### Bug Fixes

  * [`52ec5ec`](https://github.com/npm/cli/commit/52ec5ec61fd3b266efd7a9c5712dd6a769a2d365) [#5154](https://github.com/npm/cli/pull/5154) fix: properly open package arg repo inside workspace ([@wraithgar](https://github.com/wraithgar))

### Documentation

  * [`9697f16`](https://github.com/npm/cli/commit/9697f16952b1bf02bb5455c36a1995277cbc0c97) [#5118](https://github.com/npm/cli/pull/5118) docs: typo in npm command ([@crisanmm](https://github.com/crisanmm))
  * [`da5a4ba`](https://github.com/npm/cli/commit/da5a4ba2c83af9a7e5e0fe38c32136adf396f557) [#5079](https://github.com/npm/cli/pull/5079) docs: update reference to deprecated spdx package ([@kachick](https://github.com/kachick))
  * [`25b3058`](https://github.com/npm/cli/commit/25b305830be0892bbbf0245aee2eebdb76ee2ce3) [#5043](https://github.com/npm/cli/pull/5043) docs: naming of files in example code should be consistent ([@xc1427](https://github.com/xc1427))
  * [`ac56fc4`](https://github.com/npm/cli/commit/ac56fc41bc2f91f51c8438f98893121e7a92ee46) [#5095](https://github.com/npm/cli/pull/5095) docs: document `dependencies` script ([@nlf](https://github.com/nlf))

### Dependencies

  * [`cb0db7c`](https://github.com/npm/cli/commit/cb0db7c3fd1d0a4c30db9f44e9ea9e69ec327fe8) [#5147](https://github.com/npm/cli/pull/5147) deps: `@npmcli/arborist@5.3.0`
  * [`b8c0580`](https://github.com/npm/cli/commit/b8c0580e5df93aa519b3ec240bb85d59eee5ee37) [#5156](https://github.com/npm/cli/pull/5156) deps: `minipass@3.3.4`
  * [`ad72611`](https://github.com/npm/cli/commit/ad726118755ef577cc0755499d35a5d3c74d54a6) [#5156](https://github.com/npm/cli/pull/5156) deps: `lru-cache@7.12.0`
  * [`c94919d`](https://github.com/npm/cli/commit/c94919dd4874196d3a84eff4fab450a17dcd4867) [#5156](https://github.com/npm/cli/pull/5156) deps: `just-diff@5.0.3`
  * [`18ddc57`](https://github.com/npm/cli/commit/18ddc57c7a54165d55c81b413ef9de981c790148) [#5156](https://github.com/npm/cli/pull/5156) deps: `just-diff-apply@5.3.1`
  * [`a2d700b`](https://github.com/npm/cli/commit/a2d700b3cc7cebca2d1b0c16224af41da3689aaf) [#5156](https://github.com/npm/cli/pull/5156) deps: `npm-package-arg@9.1.0`
  * [`99dc697`](https://github.com/npm/cli/commit/99dc697409e1eb42caaf0c0e38fa41635d89a871) [#5156](https://github.com/npm/cli/pull/5156) deps: `@npmcli/run-script@4.1.7`
  * [`4a9f2dc`](https://github.com/npm/cli/commit/4a9f2dc9169fd330c4dcf2bad7890aaf4765bafa) [#5157](https://github.com/npm/cli/pull/5157) deps: `npm-registry-fetch@13.2.0`
  * [`45a9bde`](https://github.com/npm/cli/commit/45a9bdee604073a3c5b4d3c6d90e22bf6672d6bf) [#5158](https://github.com/npm/cli/pull/5158) deps: `npm-profile@6.2.0`

## v8.13.2 (2022-06-29)

### Documentation

  * [`5be7d6e`](https://github.com/npm/cli/commit/5be7d6ea555bc25acaae1bfd309d64ce6693b084) [#5087](https://github.com/npm/cli/pull/5087) docs: add foreground-scripts to run-script page ([@ruyadorno](https://github.com/ruyadorno))

### Dependencies

  * [`dd62328`](https://github.com/npm/cli/commit/dd6232817d8c86afa4eb27ec1f62278893443163) [#5086](https://github.com/npm/cli/pull/5086) deps: `@npmcli/run-script@4.1.4`
  * [`5546906`](https://github.com/npm/cli/commit/5546906977bae55c61a3874e2cbf10e28f2df4ea) [#5086](https://github.com/npm/cli/pull/5086) deps: `@npmcli/run-script@4.1.5`
  * [`c7d5a69`](https://github.com/npm/cli/commit/c7d5a69080b5de6ed0f1cdde77e7d7a3c6b05158) [#5102](https://github.com/npm/cli/pull/5102) deps: `@npmcli/metavuln-calculator@3.1.1`
  * [`7ce66b0`](https://github.com/npm/cli/commit/7ce66b017a611458b4ce385c13c446d89c23d777) [#5103](https://github.com/npm/cli/pull/5103) deps: `npm-packlist@5.1.1`

## v8.13.1 (2022-06-23)

### Dependencies

  * [`f59a114`](https://github.com/npm/cli/commit/f59a114ffe3d1f86ccb2e52a4432292ab76852cc) [#5064](https://github.com/npm/cli/pull/5064) deps: `@npmcli/run-script@4.1.3`
    * fix: improves escaping of arguments for run-script, exec and npx ([@nlf](https://github.com/nlf))
  * [`236b4a2`](https://github.com/npm/cli/commit/236b4a21046c4cb43a1aaa8bde09f4cec2aa1fb6) [#5069](https://github.com/npm/cli/pull/5069) deps: `libnpmpack@4.1.2`
  * [`0a6664d`](https://github.com/npm/cli/commit/0a6664d285b300f26764efaa2798a5b6045b95a1) [#5070](https://github.com/npm/cli/pull/5070) deps: `@npmcli/arborist@5.2.3`
  * [`9f94049`](https://github.com/npm/cli/commit/9f94049f058687b916da726ea625b5fa68d0829d) [#5071](https://github.com/npm/cli/pull/5071) deps: `libnpmexec@4.0.8`
  * [`8212363`](https://github.com/npm/cli/commit/8212363280f02c10f38e22c2dcd7e2abdf8bec35) [#5072](https://github.com/npm/cli/pull/5072) deps: `libnpmversion@3.0.6`

## v8.13.0 (2022-06-22)

### Features

  * [`06fd788`](https://github.com/npm/cli/commit/06fd788f79e16da04d6e96aa56416cd2698f057a) [#4960](https://github.com/npm/cli/pull/4960) feat: prompt before opening web-login URL when performing `login`/`adduser` ([@jumoel](https://github.com/jumoel))

### Bug Fixes

  * [`e03009f`](https://github.com/npm/cli/commit/e03009f4b423e85e498f1b1851fae785de91a73d) [#5042](https://github.com/npm/cli/pull/5042) fix: Add space to SemVer log message ([@dnicolson](https://github.com/dnicolson))
  * [`2953983`](https://github.com/npm/cli/commit/2953983ad5c5e830a5844be5d6d0a2b49863c05d) [#5035](https://github.com/npm/cli/pull/5035) fix(view): error on missing version ([@wraithgar](https://github.com/wraithgar))

### Documentation

  * [`69b5a96`](https://github.com/npm/cli/commit/69b5a9674e8c03219c3da088b35b8ec6dea69770) [#5048](https://github.com/npm/cli/pull/5048) docs: consolidate docs and help for package spec ([@wraithgar](https://github.com/wraithgar))
  * [`facba42`](https://github.com/npm/cli/commit/facba42bcd2a10722788f44de13ea46cde6c8e71) [#5030](https://github.com/npm/cli/pull/5030) docs: fix typo ([@westy92](https://github.com/westy92))

### Dependencies

  * [`2e50cb8`](https://github.com/npm/cli/commit/2e50cb83e84cf25fee93ba0ca5a0343fbdb33c41) [#5049](https://github.com/npm/cli/pull/5049) deps: `pacote@13.6.1`
  * [`2c06cee`](https://github.com/npm/cli/commit/2c06ceee82dd813c0ae84cc0b09e6941cfc5533e) [#5049](https://github.com/npm/cli/pull/5049) deps: `@npmcli/run-script@4.1.0`
  * [`61112f7`](https://github.com/npm/cli/commit/61112f718efd1dd31e56c98321b721692e19f032) [#5044](https://github.com/npm/cli/pull/5044) deps: `make-fetch-happen@10.1.8`
  * [`01eef03`](https://github.com/npm/cli/commit/01eef035cf3c14136fc68da09b05b2ff9d73f2e1) [#5034](https://github.com/npm/cli/pull/5034) deps: `npm-profile@6.1.0`
  * [`afa10c7`](https://github.com/npm/cli/commit/afa10c747e44bc6fa12cfeb3ece7a8e25ac4beae) [#5063](https://github.com/npm/cli/pull/5063) deps: `libnpmdiff@4.0.4`
  * [`a5be4d6`](https://github.com/npm/cli/commit/a5be4d612ff1ce2b31e2246cf17308652e804ce1) [#5062](https://github.com/npm/cli/pull/5062) deps: `libnpmversion@3.0.5`
  * [`3ea332b`](https://github.com/npm/cli/commit/3ea332b1cbc24c82c1ee7523b4fb37d295d47243) [#5061](https://github.com/npm/cli/pull/5061) deps: `libnpmpack@4.1.1`
  * [`14a08d6`](https://github.com/npm/cli/commit/14a08d6ceb57130a2e4bdbad74ebf4944c92890e) [#5060](https://github.com/npm/cli/pull/5060) deps: `libnpmexec@4.0.7`
  * [`1ab9776`](https://github.com/npm/cli/commit/1ab9776b5db12d2fd14bf379ce0ae715a49a68fa) [#5059](https://github.com/npm/cli/pull/5059) deps: `@npmcli/arborist@5.2.2`

## v8.12.2 (2022-06-15)

### Dependencies

  * [`053dffe`](https://github.com/npm/cli/commit/053dffe2adf4bc5cc33e98de63f9331f47be23ea) [#4986](https://github.com/npm/cli/pull/4986) deps: `make-fetch-happen@10.1.7`
  * [`d404c8c`](https://github.com/npm/cli/commit/d404c8c9d3f86e7491070210a763e701582830e0) [#4985](https://github.com/npm/cli/pull/4985) deps: `cacache@16.1.1`

## v8.12.1 (2022-06-02)

### Bug Fixes

  * [`40c823c`](https://github.com/npm/cli/commit/40c823cc7d33d22f659a1ccceed440baacaaff1d) [#4982](https://github.com/npm/cli/pull/4982) fix: undeprecate and remove warnings for --global, -g, --local ([@fritzy](https://github.com/fritzy))

## v8.12.0 (2022-06-01)

### Features

  * [`aee6fc8`](https://github.com/npm/cli/commit/aee6fc857458ac660bf90ecd0af94212c7269fd7) [#4892](https://github.com/npm/cli/pull/4892) feat(init): reify on init new workspace ([@ruyadorno](https://github.com/ruyadorno))
  * [`a8ae177`](https://github.com/npm/cli/commit/a8ae17775a24ccbaf4570530d7433e0d290b3793) [#4931](https://github.com/npm/cli/pull/4931) feat: Add `--auth-type=webauthn` flag ([@jumoel](https://github.com/jumoel))

### Bug Fixes

  * [`646b6b5`](https://github.com/npm/cli/commit/646b6b5d05de937beb8202e5fd8b8daf3e58e902) [#4963](https://github.com/npm/cli/pull/4963) fix(arborist): use rawSpec for bundled and shrinkwrapped deps ([@nlf](https://github.com/nlf))
  * [`fcc72dd`](https://github.com/npm/cli/commit/fcc72dd8791187f4b3d8705fb23c2744c83ef943) [#4929](https://github.com/npm/cli/pull/4929) fix(libnpmexec): fix bug not install latest pkg ([@jihunleekr](https://github.com/jihunleekr))

### Dependencies

  * [`a6b62b2`](https://github.com/npm/cli/commit/a6b62b2b0a3a22c4039b41b527ebdf8d06b0e1f1) [#4949](https://github.com/npm/cli/pull/4949) deps: `make-fetch-happen@10.1.6`
  * [`fb4cc24`](https://github.com/npm/cli/commit/fb4cc249a413af1ecfe6b2be14b1d376f787a03d) [#4969](https://github.com/npm/cli/pull/4969) deps: `pacote@13.6.0`
  * [`5b9688c`](https://github.com/npm/cli/commit/5b9688cfd832ae72071a89ee7a7c3a939df91c58) [#4971](https://github.com/npm/cli/pull/4971) deps: `glob@8.0.3`
  * [`a8bfdd8`](https://github.com/npm/cli/commit/a8bfdd8e8f3939f9be1d61567ee19ed4834e64be) [#4972](https://github.com/npm/cli/pull/4972) deps: `minimatch@5.1.0`
  * [`66981ec`](https://github.com/npm/cli/commit/66981ecf08b888fde9188c162cc928fff7d6d9d6) [#4973](https://github.com/npm/cli/pull/4973) deps: `tap@16.2.0`
  * [`180a7e4`](https://github.com/npm/cli/commit/180a7e4647ded3d3bca5cd9a2fa8d264b7d2104a) [#4975](https://github.com/npm/cli/pull/4975) deps: `@npmcli/arborist@5.2.1`
  * [`0886f7f`](https://github.com/npm/cli/commit/0886f7fa5ac641137052782698407ada230c611c) [#4976](https://github.com/npm/cli/pull/4976) deps: `libnpmexec@4.0.6`

## v8.11.0 (2022-05-25)

### Features

  * [`8898710`](https://github.com/npm/cli/commit/8898710220a3d84b0a9ea2a6d9cf880e50b94c9e) [#4879](https://github.com/npm/cli/pull/4879) feat: deprecated set-script, birthday, --global, and --local ([@fritzy](https://github.com/fritzy))
  * [`7307c8d`](https://github.com/npm/cli/commit/7307c8de388cd14c96c42d70b7e567ec343ad084) [#4940](https://github.com/npm/cli/pull/4940) feat(libnpmpack): bump pacote for better workspace awareness ([@nlf](https://github.com/nlf))

### Bug Fixes

  * [`400c80f`](https://github.com/npm/cli/commit/400c80f570228a2c0ffe09d6564cc88dc2f356c3) [#4913](https://github.com/npm/cli/pull/4913) fix(ci): remove node_modules post-validation ([@wraithgar](https://github.com/wraithgar))
  * [`124df81`](https://github.com/npm/cli/commit/124df81391ea5810b29d2af9500ed597f076d597) [#4910](https://github.com/npm/cli/pull/4910) fix: clean up npm cache tests ([@wraithgar](https://github.com/wraithgar))
  * [`ee3308a`](https://github.com/npm/cli/commit/ee3308a7a08799ec7e86237165ebaf278d9a4f9f) fix: remove dead code from get-identity ([@wraithgar](https://github.com/wraithgar))
  * [`357b0af`](https://github.com/npm/cli/commit/357b0af2af2b07a58d2d837043d1d77c9495d8b5) [#4917](https://github.com/npm/cli/pull/4917) fix: pass prefix and workspaces to libnpmpack ([@nlf](https://github.com/nlf))
  * [`0f89e07`](https://github.com/npm/cli/commit/0f89e0750f2ac9b5b4794b5718d047b5286283c8) [#4935](https://github.com/npm/cli/pull/4935) fix: add global getter to npm class ([@nlf](https://github.com/nlf))

### Documentation

  * [`83ed8d0`](https://github.com/npm/cli/commit/83ed8d0d4fb51716fa58608fa3c1ee8eb0a93571) [#4922](https://github.com/npm/cli/pull/4922) docs: update roadmap link in readme ([@OmriBarZik](https://github.com/OmriBarZik))
  * [`ed054d4`](https://github.com/npm/cli/commit/ed054d477093be3da96968d217c244cf2efd3ef1) [#4933](https://github.com/npm/cli/pull/4933) docs: fix broken link in changelog ([@yonran](https://github.com/yonran))

### Dependencies

  * [`632ce87`](https://github.com/npm/cli/commit/632ce87bbd23707cba2c49b95d5db755b3d68638) [#4915](https://github.com/npm/cli/pull/4915) deps: `cacache@16.1.0`
  * [`7b2b77a`](https://github.com/npm/cli/commit/7b2b77adca730e516c1b187092374a01de7f0f56) [#4915](https://github.com/npm/cli/pull/4915) deps: `make-fetch-happen@10.1.5`
  * [`f3b0a24`](https://github.com/npm/cli/commit/f3b0a2407c7e213b1660ef7024c861dcb0eacb50) [#4915](https://github.com/npm/cli/pull/4915) deps: `pacote@13.4.1`
  * [`0df3011`](https://github.com/npm/cli/commit/0df3011ec59ba76c12fb8fbfb29ff4d601cc4bdb) [#4915](https://github.com/npm/cli/pull/4915) deps: `ssri@9.0.1`
  * [`dc38ab9`](https://github.com/npm/cli/commit/dc38ab96fca99069449e6c5e492062b94a1264b6) [#4919](https://github.com/npm/cli/pull/4919) deps: `npm-packlist@5.0.4`
  * [`353e2f9`](https://github.com/npm/cli/commit/353e2f9dc60a5d319d4105822a9e0b2ddbf82bc0) [#4940](https://github.com/npm/cli/pull/4940) deps: `pacote@13.5.0 npm-packlist@5.1.0`
  * [`f4d4126`](https://github.com/npm/cli/commit/f4d41265931c3c2eee433e27f4535c7a209e69fa) [#4941](https://github.com/npm/cli/pull/4941) deps: `libnpmpack@4.1.0`

## v8.10.0 (2022-05-11)

### Features

  * [`911f55d`](https://github.com/npm/cli/commit/911f55dc6ac3672f48740d0675f67c934c01aaf4) [#4864](https://github.com/npm/cli/pull/4864) feat: add --iwr alias for --include-workspace-root ([@fritzy](https://github.com/fritzy))
  * [`bfb8bcc`](https://github.com/npm/cli/commit/bfb8bccbe83753e527b43c8a3889696087dbe8f1) [#4874](https://github.com/npm/cli/pull/4874) feat: add flag --omit-lockfile-registry-resolved ([@fritzy](https://github.com/fritzy)) ([Caleb ツ Everett](mailto:calebev@amazon.com))

### Bug Fixes

  * [`48d2db6`](https://github.com/npm/cli/commit/48d2db6037487fd782f67bbcd2cf12e009ece17b) [#4862](https://github.com/npm/cli/pull/4862) fix: remove test coverage map ([@wraithgar](https://github.com/wraithgar))
  * [`38cf29a`](https://github.com/npm/cli/commit/38cf29a0054544c575b6bce953f1d433dbb6a3b5) [#4868](https://github.com/npm/cli/pull/4868) fix: cleanup star/unstar ([@wraithgar](https://github.com/wraithgar))
  * [`5baa4a7`](https://github.com/npm/cli/commit/5baa4a7c64319485604982f9060702a7cee8a85c) [#4857](https://github.com/npm/cli/pull/4857) fix: consolidate bugs, docs, repo command logic ([@wraithgar](https://github.com/wraithgar))
  * [`5a50762`](https://github.com/npm/cli/commit/5a50762faa37ae5964ae6f12595b20b367056c0a) [#4875](https://github.com/npm/cli/pull/4875) fix(arborist): link deps lifecycle scripts ([@ruyadorno](https://github.com/ruyadorno))

### Dependencies

  * [`d58bf40`](https://github.com/npm/cli/commit/d58bf40abf7c3ff8ae400f50e5e5a19c33138707) [#4856](https://github.com/npm/cli/pull/4856) deps: `npm-packlist@5.0.3`
  * [`86f443e`](https://github.com/npm/cli/commit/86f443e97aa58c1a06b8eb6f523656274234bb71) [#4872](https://github.com/npm/cli/pull/4872) deps: `make-fetch-happen@10.1.3`
  * [`f9984e6`](https://github.com/npm/cli/commit/f9984e64e714937fa69f14850a1d3ed7ccfc934c) [#4880](https://github.com/npm/cli/pull/4880) deps: `@npmcli/arborist@5.2.0`
  * [`ba59915`](https://github.com/npm/cli/commit/ba599154dc8ea9f424410fb7dc382d5829215920) [#4881](https://github.com/npm/cli/pull/4881) deps: `socks-proxy-agent@6.2.0`
  * [`c0806ba`](https://github.com/npm/cli/commit/c0806ba2b325456199069b245446c8a86e7feae2) [#4881](https://github.com/npm/cli/pull/4881) deps: `http-proxy-agent@5.0.1`
  * [`cc7be6b`](https://github.com/npm/cli/commit/cc7be6b8b63a7314066e8763589a57e5a6e77d30) [#4881](https://github.com/npm/cli/pull/4881) deps: `is-core-module@2.9.0`
  * [`0432c7d`](https://github.com/npm/cli/commit/0432c7d8a22ddbfdf238c2b22dd3c7bd263e2d6c) [#4881](https://github.com/npm/cli/pull/4881) deps: `lru-cache@7.9.0`
  * [`5778820`](https://github.com/npm/cli/commit/57788204646a6aa5a384630a5640bf00efa25ce0) [#4881](https://github.com/npm/cli/pull/4881) deps: `just-diff@5.0.2`
  * [`893dd00`](https://github.com/npm/cli/commit/893dd0066e2315f0d9937fe05879957e1446b755) [#4881](https://github.com/npm/cli/pull/4881) deps: `ip@1.1.8`
  * [`6ab85bd`](https://github.com/npm/cli/commit/6ab85bd5df88ade023f7e4895d07a39228d23a33) [#4881](https://github.com/npm/cli/pull/4881) deps: `builtins@5.0.1`

## v8.9.0 (2022-05-04)

### Features

  * [`62af3a1`](https://github.com/npm/cli/commit/62af3a1dc003cf23c563d18437be81f61e65cb49) [#4835](https://github.com/npm/cli/pull/4835) feat: make npm owner workspace aware ([@wraithgar](https://github.com/wraithgar))

### Bug Fixes

  * [`d654e7e`](https://github.com/npm/cli/commit/d654e7e9146f123a9806cfd9a17150eb1f6075a4) [#4781](https://github.com/npm/cli/pull/4781) fix: start consolidating color output ([@wraithgar](https://github.com/wraithgar))
  * [`b9a966c`](https://github.com/npm/cli/commit/b9a966cf33cfa9b1e5f16c16219f63633bbe19d6) [#4843](https://github.com/npm/cli/pull/4843) fix(exec): ignore packageLockOnly flag ([@nlf](https://github.com/nlf))

### Documentation

  * [`8fd7eec`](https://github.com/npm/cli/commit/8fd7eec8ef76224dd8a9874a1044a0cc8f5e1c49) [#4845](https://github.com/npm/cli/pull/4845) docs: remove incorrect v6 auto prune info ([@wraithgar](https://github.com/wraithgar))
  * [`5f59f80`](https://github.com/npm/cli/commit/5f59f803d1c6cdc690d4d7016990ca0e20c6706f) [#4847](https://github.com/npm/cli/pull/4847) docs: show complex object interactions in npm pkg ([@wraithgar](https://github.com/wraithgar))

### Dependencies

  * [`62faf8a`](https://github.com/npm/cli/commit/62faf8adba19d6ef26238887a453d013fe58ae75) [#4837](https://github.com/npm/cli/pull/4837) deps: `pacote@13.2.0`
  * [`4ff7d3d`](https://github.com/npm/cli/commit/4ff7d3d993533d6407fa69c5e6dd00f95090a280) [#4816](https://github.com/npm/cli/pull/4816) deps: `cacache@16.0.7`
  * [`e2e9c81`](https://github.com/npm/cli/commit/e2e9c8152e2d2adcb7e2dfc90f61353d50e433ba) [#4852](https://github.com/npm/cli/pull/4852) deps: `pacote@13.3.0`

## v8.8.0 (2022-04-27)

### Features

  * [`bedd8a1`](https://github.com/npm/cli/commit/bedd8a1f5844b5b379af5a756baa70821d78c610) [#4745](https://github.com/npm/cli/pull/4745) feat: add install-links config definition ([@nlf](https://github.com/nlf))

### Bug Fixes

  * [`6253d19`](https://github.com/npm/cli/commit/6253d1968d8390ea6b16604ff3abb5e6509349c9) [#4643](https://github.com/npm/cli/pull/4643) fix(exec): workspaces support ([@ruyadorno](https://github.com/ruyadorno))
  * [`e9163b4`](https://github.com/npm/cli/commit/e9163b48d8e46a80d2a4cc98c492b94dfa152cb8) [#4657](https://github.com/npm/cli/pull/4657) fix(libnpmpublish): unpublish from custom registry ([@ruyadorno](https://github.com/ruyadorno))
  * [`a677f49`](https://github.com/npm/cli/commit/a677f49e29ee9d472c8c9aa1c9eb3d5d8b4ee4a9) [#4778](https://github.com/npm/cli/pull/4778) fix: Use node in and fallback to PATH if not found ([@elibus](https://github.com/elibus))
  * [`b10462e`](https://github.com/npm/cli/commit/b10462ed156ada4d4ad90e6cf613e292a9361a87) [#4752](https://github.com/npm/cli/pull/4752) fix: completion for `deprecate` cmd ([@wraithgar](https://github.com/wraithgar))
  * [`ced0acf`](https://github.com/npm/cli/commit/ced0acfe5998a5be9313815f76f5c1439a09db78) [#4775](https://github.com/npm/cli/pull/4775) fix: consolidate registryConfig application logic ([@wraithgar](https://github.com/wraithgar))
  * [`b06e89f`](https://github.com/npm/cli/commit/b06e89f434fe8f104e71d4d8b5c98f1e866efdfa) [#4679](https://github.com/npm/cli/pull/4679) fix(install): do not install invalid package name ([@ruyadorno](https://github.com/ruyadorno))
  * [`9ea2603`](https://github.com/npm/cli/commit/9ea26038ad4d3dc971d442cba2bb02a35755c07a) [#4786](https://github.com/npm/cli/pull/4786) fix: normalize win32 paths before globbing ([@lukekarrys](https://github.com/lukekarrys))
  * [`8da28b4`](https://github.com/npm/cli/commit/8da28b403f32d2e99c842893bdc40429b8ffa9a7) [#4757](https://github.com/npm/cli/pull/4757) fix: remove `lib/utils/read-package-name.js` ([@wraithgar](https://github.com/wraithgar))

### Documentation

  * [`a6ea884`](https://github.com/npm/cli/commit/a6ea8843a9761d4392b3344400eb56e07691a91d) [#4745](https://github.com/npm/cli/pull/4745) docs: add some more docs for --install-links ([@nlf](https://github.com/nlf))
  * [`6cd6831`](https://github.com/npm/cli/commit/6cd6831eaa9e1681e07f6646e6f13cce344e1250) [#4782](https://github.com/npm/cli/pull/4782) docs: explain that _auth only goes to npm registry ([@wraithgar](https://github.com/wraithgar))
  * [`fa3d829`](https://github.com/npm/cli/commit/fa3d82989df7071cfe500c5f9cc09c597bcc17ee) [#4772](https://github.com/npm/cli/pull/4772) docs: include org instructions in scoped publish ([@bnb](https://github.com/bnb))

### Dependencies

  * [`36899d1`](https://github.com/npm/cli/commit/36899d193b8e8ee6019b04aa5e6a3a9a641a3172) [#4807](https://github.com/npm/cli/pull/4807) deps: `@npmcli/arborist@5.1.1`
    * [`0ebadf5`](https://github.com/npm/cli/commit/0ebadf5b603368557e9e837a46ea5c59c2677a81) [#4745](https://github.com/npm/cli/pull/4745) add support for installLinks ([@nlf](https://github.com/nlf))
    * [`3d96494`](https://github.com/npm/cli/commit/3d964940f410052918e37a9b05818fe9dc4cd86a) [#4745](https://github.com/npm/cli/pull/4745) when replacing a Link with a Node, make sure to remove the Link target from the root ([@nlf](https://github.com/nlf))
  * [`3f2b24a`](https://github.com/npm/cli/commit/3f2b24afe205547dbbadf5a6313e95f6b565fb49) [#4786](https://github.com/npm/cli/pull/4786) deps: `@npmcli/map-workspaces@2.0.3`
  * [`b1b6948`](https://github.com/npm/cli/commit/b1b69487637ce99192dc930257eebae9eed4fe7f) [#4808](https://github.com/npm/cli/pull/4808) deps: `libnpmexec@4.0.5`
    * [`4a46a27`](https://github.com/npm/cli/commit/4a46a27f2b968e2f8c1f4821508f93013738c482) [#4777](https://github.com/npm/cli/pull/4777) fix read mixed local/registry pkg ([@ruyadorno](https://github.com/ruyadorno))
  * [`9f57404`](https://github.com/npm/cli/commit/9f57404dc148835d7393b5fe617c8c5e2c958061) [#4743](https://github.com/npm/cli/pull/4743) deps: `npm-registry-fetch@13.1.1`
  * [`532883f`](https://github.com/npm/cli/commit/532883ffc35fc1cc9aec09f03bf5ee0f256b94a4) [#4786](https://github.com/npm/cli/pull/4786) deps: `cacache@16.0.6`
  * [`4d1398e`](https://github.com/npm/cli/commit/4d1398e347ed56464d7afd8ef0b3a3bc82b2f19f) [#4786](https://github.com/npm/cli/pull/4786) deps: `npm-profile@6.0.3`
  * [`5e31322`](https://github.com/npm/cli/commit/5e313223100db1207818d756b081eaba3468b273) [#4786](https://github.com/npm/cli/pull/4786) deps: `npmlog@6.0.2`
  * [`4eb2ccb`](https://github.com/npm/cli/commit/4eb2ccbacbd2ca55f2a41a104ee20578542fc52f) [#4786](https://github.com/npm/cli/pull/4786) deps: `read-package-json@5.0.1`
  * [`aeb54e4`](https://github.com/npm/cli/commit/aeb54e41b613f4a98d1f02d255b3a564c43270d8) [#4786](https://github.com/npm/cli/pull/4786) deps: `glob@8.0.1`
  * [`252b2b1`](https://github.com/npm/cli/commit/252b2b1e8caaf1c26e5ab6836a83ec430d2a699a) [#4786](https://github.com/npm/cli/pull/4786) deps: `npm-packlist@5.0.2`
  * [`c51e553`](https://github.com/npm/cli/commit/c51e553a32315e4f1b703ca9030eb7ade91d1a85) [#4786](https://github.com/npm/cli/pull/4786) deps: `semver@7.3.7`
  * [`13299ee`](https://github.com/npm/cli/commit/13299eed80db9a05f0b0a063b8936c0148ec3037) [#4786](https://github.com/npm/cli/pull/4786) deps: `lru-cache@7.8.1`
  * [`0f2da5d`](https://github.com/npm/cli/commit/0f2da5dca54862707a00d2254bf4c0b4c2e0be60) [#4786](https://github.com/npm/cli/pull/4786) deps: `cli-table3@0.6.2`
  * [`0ee57f1`](https://github.com/npm/cli/commit/0ee57f1492893da84686f4340feeb0469fb751f8) [#4805](https://github.com/npm/cli/pull/4805) deps: `libnpmpublish@6.0.4`
  * [`8a633a4`](https://github.com/npm/cli/commit/8a633a436cf37dad293af3aaf8ea9a0b5badf314) [#4806](https://github.com/npm/cli/pull/4806) deps: `libnpmversion@3.0.4`

## v8.7.0 (2022-04-13)

### Features

  * [`6611e91`](https://github.com/npm/cli/commit/6611e9147f1726ab4537a7fe3b9e3beb6728f700) [#4723](https://github.com/npm/cli/pull/4723) feat(config): add more npm/node information to config ls ([@lukekarrys](https://github.com/lukekarrys))
  * [`c057b90`](https://github.com/npm/cli/commit/c057b90d0954ff5b6f2973748ae5d41885b99213) [#4740](https://github.com/npm/cli/pull/4740) feat(config): warn on deprecated configs ([@lukekarrys](https://github.com/lukekarrys))

### Bug Fixes

  * [`2829cb2`](https://github.com/npm/cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d) [#4658](https://github.com/npm/cli/pull/4658) fix: update readme badges ([@lukekarrys](https://github.com/lukekarrys))
  * [`e3da5df`](https://github.com/npm/cli/commit/e3da5df4152fbe547f7871547165328e1bf06262) [#4667](https://github.com/npm/cli/pull/4667) fix: replace deprecated String.prototype.substr() ([@CommanderRoot](https://github.com/CommanderRoot))
  * [`2a26e5e`](https://github.com/npm/cli/commit/2a26e5e21af788f025a5731d88f15f6dc88b4c0c) [#4645](https://github.com/npm/cli/pull/4645) fix: remove dedupe --save ([@wraithgar](https://github.com/wraithgar))
  * [`47438ff`](https://github.com/npm/cli/commit/47438ff19f4b6e84a0325ed73b97999ce34bc789) [#4645](https://github.com/npm/cli/pull/4645) fix: do not export npm_config_include_workspace_root ([@wraithgar](https://github.com/wraithgar))
  * [`840c338`](https://github.com/npm/cli/commit/840c338aa6aba7dc39d9d3afba075701e3979362) [#4678](https://github.com/npm/cli/pull/4678) fix(run-script): don't cascade if-present config ([@ruyadorno](https://github.com/ruyadorno))
  * [`4d676e3`](https://github.com/npm/cli/commit/4d676e31a68f081b8553eff4e79db1f29acf47e1) [#4709](https://github.com/npm/cli/pull/4709) fix(arborist): when reloading an edge, also refresh overrides ([@nlf](https://github.com/nlf))
  * [`3f7fe17`](https://github.com/npm/cli/commit/3f7fe17d1ea743b3ce1f27b9156e9fa0e358a7df) [#4659](https://github.com/npm/cli/pull/4659) fix: skip update notifier file if not requested ([@lukekarrys](https://github.com/lukekarrys))
  * [`5ba7f0c`](https://github.com/npm/cli/commit/5ba7f0cef753d4af0bc02ca7d6dd0ac1bdd11ffe) [#4726](https://github.com/npm/cli/pull/4726) fix: show more information during publish dry-run ([@lukekarrys](https://github.com/lukekarrys))
  * [`aa4a4da`](https://github.com/npm/cli/commit/aa4a4da336a6ec1963394fdbd06acb173c842d26) [#4735](https://github.com/npm/cli/pull/4735) fix(arborist): dont skip adding advisories to audit based on name/range ([@lukekarrys](https://github.com/lukekarrys))
  * [`0cd852f`](https://github.com/npm/cli/commit/0cd852f62e1453e647a2551e98c78ce7e0c8ea03) [#4741](https://github.com/npm/cli/pull/4741) fix: mitigate doctor test race condition ([@wraithgar](https://github.com/wraithgar))
  * [`ba8b2a7`](https://github.com/npm/cli/commit/ba8b2a753d63c8a8c7a44a48c2e13626b12025fe) [#4744](https://github.com/npm/cli/pull/4744) fix(ls): make `--omit` filter `npm ls` ([@lukekarrys](https://github.com/lukekarrys))

### Documentation

  * [`85b3c48`](https://github.com/npm/cli/commit/85b3c48d2c9bc4199aed699cc4c00ac96c5feebd) [#4666](https://github.com/npm/cli/pull/4666) docs(ci): add note that configuration must be consistent between install and ci ([@nlf](https://github.com/nlf))
  * [`44108f7`](https://github.com/npm/cli/commit/44108f7be5e1e928d8aa3eda3c5c177bcd216c99) [#4670](https://github.com/npm/cli/pull/4670) docs: fix npm-uninstall typo ([@JSKitty](https://github.com/JSKitty))

### Dependencies

  * [`aaf86f6`](https://github.com/npm/cli/commit/aaf86f61836c45b254794785f0a2e8f43dc38800) [#4674](https://github.com/npm/cli/pull/4674) deps: `@npmcli/metavuln-calculator@3.1.0`
  * [`4a9a705`](https://github.com/npm/cli/commit/4a9a705de6992a3e9eefecc6c0cf8da45a527c7a) [#4691](https://github.com/npm/cli/pull/4691) deps: `@npmcli/package-json@2.0.0`
  * [`1a90b9e`](https://github.com/npm/cli/commit/1a90b9e9ebe98cce83591e11312aaf41c830f835) [#4691](https://github.com/npm/cli/pull/4691) deps: `treeverse@2.0.0`
  * [`f86f1af`](https://github.com/npm/cli/commit/f86f1af636f39d7d30a97873bbb6652416f68013) [#4691](https://github.com/npm/cli/pull/4691) deps: `@npmcli/disparity-colors@2.0.0`
  * [`3a76dff`](https://github.com/npm/cli/commit/3a76dff3f49af9688a44a508d956f2091363b66d) [#4691](https://github.com/npm/cli/pull/4691) deps: `make-fetch-happen@10.1.2`
  * [`0230428`](https://github.com/npm/cli/commit/02304284ddd147e604835a000d3a28a2deb65702) [#4691](https://github.com/npm/cli/pull/4691) deps: `@npmcli/config@4.0.2`
  * [`82dc75f`](https://github.com/npm/cli/commit/82dc75fe62466714ea59accf245a6f9d6d111e17) [#4691](https://github.com/npm/cli/pull/4691) deps: `npm-pick-manifest@7.0.1`
  * [`ad99360`](https://github.com/npm/cli/commit/ad9936063f20829eb9d5358d056593883f17a57b) [#4691](https://github.com/npm/cli/pull/4691) deps: `npm-install-checks@5.0.0`
  * [`79fc706`](https://github.com/npm/cli/commit/79fc706f9c389a17ba50dd8835223160b8b0c3fb) [#4691](https://github.com/npm/cli/pull/4691) deps: `bin-links@3.0.1`
  * [`1f2fb1e`](https://github.com/npm/cli/commit/1f2fb1e07b752ee34867c271a0fd1f186397d8ec) [#4691](https://github.com/npm/cli/pull/4691) deps: `@npmcli/git@3.0.1`
  * [`0f23c33`](https://github.com/npm/cli/commit/0f23c3378c991b2a482463ce7f700829a3752940) [#4691](https://github.com/npm/cli/pull/4691) deps: `@npmcli/run-script@3.0.2`
  * [`485753d`](https://github.com/npm/cli/commit/485753df44e66921dcb593e1bcbb39de79c6dc11) [#4691](https://github.com/npm/cli/pull/4691) deps: `cacache@16.0.4`
  * [`e9b25cd`](https://github.com/npm/cli/commit/e9b25cd66bef17e807a84e7b10384f5f4d0064b7) [#4691](https://github.com/npm/cli/pull/4691) deps: `@npmcli/move-file@2.0.0`
  * [`0e87cac`](https://github.com/npm/cli/commit/0e87cac8b6f09692f6bd1bf086aadbe323d127b5) [#4691](https://github.com/npm/cli/pull/4691) deps: `@npmcli/node-gyp@2.0.0`
  * [`b632746`](https://github.com/npm/cli/commit/b632746b99121b5a271c75b985a849dfd75b6c57) [#4691](https://github.com/npm/cli/pull/4691) deps: `@npmcli/promise-spawn@3.0.0`
  * [`b1863bf`](https://github.com/npm/cli/commit/b1863bf87adeb6deec83869f0f7bb1df4a5731ef) [#4691](https://github.com/npm/cli/pull/4691) deps: `pacote@13.1.1`
  * [`a2781a3`](https://github.com/npm/cli/commit/a2781a367d62328d7f870de878f1b63d66593f4f) [#4691](https://github.com/npm/cli/pull/4691) deps: `ssri@9.0.0`
  * [`5172e03`](https://github.com/npm/cli/commit/5172e03a572c99159568861049e4c2a536922f50) [#4691](https://github.com/npm/cli/pull/4691) deps: `ini@3.0.0`
  * [`71296d5`](https://github.com/npm/cli/commit/71296d5ca4ace5805e1061c1a58878939c1c32f3) [#4691](https://github.com/npm/cli/pull/4691) deps: `npm-package-arg@9.0.2`
  * [`69d8343`](https://github.com/npm/cli/commit/69d834319a9d668bd451600ab6e124a8819b284d) [#4691](https://github.com/npm/cli/pull/4691) deps: `graceful-fs@4.2.10`
  * [`c44c2b0`](https://github.com/npm/cli/commit/c44c2b02920854897ba7a663ef705b9b474c2250) [#4691](https://github.com/npm/cli/pull/4691) deps: `lru-cache@7.7.3`
  * [`38029ed`](https://github.com/npm/cli/commit/38029edea846ffe81768d7073d4ec09a4b129c24) [#4691](https://github.com/npm/cli/pull/4691) deps: `dezalgo@1.0.4`
  * [`e57353c`](https://github.com/npm/cli/commit/e57353c78e798afbd3eb4390a42da5d5076be45d) [#4691](https://github.com/npm/cli/pull/4691) deps: `semver@7.3.6`
  * [`1b30c72`](https://github.com/npm/cli/commit/1b30c725ecd0f03f55e3c0576962972748eec238) [#4691](https://github.com/npm/cli/pull/4691) deps: `minimatch@5.0.1`
  * [`c70232c`](https://github.com/npm/cli/commit/c70232cc12fd9b3b024c2c759edd708af2367b8d) [#4706](https://github.com/npm/cli/pull/4706) deps: `@npmcli/arborist@5.0.5`
  * [`baff482`](https://github.com/npm/cli/commit/baff4828f733efee0a569e00f87d25f06f2b384b) [#4705](https://github.com/npm/cli/pull/4705) deps: `libnpmdiff@4.0.3`
  * [`dda8a97`](https://github.com/npm/cli/commit/dda8a976a9dd696cf2b2e2be5b55b2048e768768) [#4704](https://github.com/npm/cli/pull/4704) deps: `libnpmorg@4.0.3`
  * [`8914864`](https://github.com/npm/cli/commit/891486451f1c34a2e7649b0a76c6c0d611ce3d39) [#4703](https://github.com/npm/cli/pull/4703) deps: `libnpmaccess@6.0.3`
  * [`3516f61`](https://github.com/npm/cli/commit/3516f61e415d9ce6e9b00378c45791e33bb99fc9) [#4702](https://github.com/npm/cli/pull/4702) deps: `libnpmfund@3.0.2`
  * [`ecd22b0`](https://github.com/npm/cli/commit/ecd22b07af515d86b77248e6a4cc2dec57bafd50) [#4701](https://github.com/npm/cli/pull/4701) deps: `libnpmversion@3.0.2`
  * [`7ed9faf`](https://github.com/npm/cli/commit/7ed9fafaa951071a7988a3ec4ca3a5e01756b11d) [#4700](https://github.com/npm/cli/pull/4700) deps: `libnpmhook@8.0.3`
  * [`df92e23`](https://github.com/npm/cli/commit/df92e23af63ca07bb4c261abd7365530529d3fd2) [#4699](https://github.com/npm/cli/pull/4699) deps: `libnpmexec@4.0.3`
  * [`5074adc`](https://github.com/npm/cli/commit/5074adc5e17d1b0ec753cde3b7efd96c2fc7c4a3) [#4698](https://github.com/npm/cli/pull/4698) deps: `libnpmsearch@5.0.3`
  * [`35e5100`](https://github.com/npm/cli/commit/35e5100e287925d19df4aab98de96cf70a6ff5a6) [#4697](https://github.com/npm/cli/pull/4697) deps: `libnpmteam@4.0.3`
  * [`86f5b27`](https://github.com/npm/cli/commit/86f5b273fc57118b8b1a5e53ec3ca49d94d81601) [#4696](https://github.com/npm/cli/pull/4696) deps: `libnpmpack@4.0.3`
  * [`1617bce`](https://github.com/npm/cli/commit/1617bce61663a743435d162b003d3b99376d426f) [#4695](https://github.com/npm/cli/pull/4695) deps: `libnpmpublish@6.0.3`
  * [`e33aa0f`](https://github.com/npm/cli/commit/e33aa0f94f87ae4f9d2a73781e84832ef61d1855) [#4714](https://github.com/npm/cli/pull/4714) deps: remove stringify-package
  * [`98377d1`](https://github.com/npm/cli/commit/98377d159f72a5b6073f07235b057984eb09a85c) [#4740](https://github.com/npm/cli/pull/4740) deps: `@npmcli/config@4.1.0`
  * [`605ccef`](https://github.com/npm/cli/commit/605ccef6916c170f6d0c53775614f8a02682262a) [#4728](https://github.com/npm/cli/pull/4728) deps: remove ansistyles
  * [`c22fb1e`](https://github.com/npm/cli/commit/c22fb1e756d43b54fefd826f2c3f459d4f1204b5) [#4728](https://github.com/npm/cli/pull/4728) deps: remove ansicolors
  * [`970244c`](https://github.com/npm/cli/commit/970244c415da91b98ca3b200d88c1206ba81d774) [#4734](https://github.com/npm/cli/pull/4734) deps: `libnpmversion@3.0.3`
  * [`42dc0b0`](https://github.com/npm/cli/commit/42dc0b03d60dc27602dab26a2f8cbfc17bf4ab40) [#4733](https://github.com/npm/cli/pull/4733) deps: `@npmcli/arborist@5.0.6`

## v8.6.0 (2022-03-31)

### Features

  * [`723a0918a`](https://github.com/npm/cli/commit/723a0918a5a9d9f795584f85d04506fafda9ca42) [#4588](https://github.com/npm/cli/pull/4588) feat(version): reify on workspace version change ([@ruyadorno](https://github.com/ruyadorno))
  * [`cc6c09431`](https://github.com/npm/cli/commit/cc6c09431d7fe2db8ac1dc7a707f2dab7a7a1f83) [#4594](https://github.com/npm/cli/pull/4594) feat: add logs-dir config to set custom logging location ([@lukekarrys](https://github.com/lukekarrys))

### Bug Fixes

  * [`98bfd9a8c`](https://github.com/npm/cli/commit/98bfd9a8cc23930e6becd15fffabadd1c269b0a2) fix: remove always true condition (#4590) ([@XhmikosR](https://github.com/XhmikosR))
  * [`81afa5a88`](https://github.com/npm/cli/commit/81afa5a8838c71a3a5037e2c8b4ae196e19fe0d7) [#4601](https://github.com/npm/cli/pull/4601) fix(unpublish): properly apply publishConfig ([@wraithgar](https://github.com/wraithgar))
  * [`716a07fde`](https://github.com/npm/cli/commit/716a07fde7905bb69e4c6f1991bb7289589a6669) [#4607](https://github.com/npm/cli/pull/4607) fix: 100% coverage in tests ([@wraithgar](https://github.com/wraithgar))
  * [`6f9cb490e`](https://github.com/npm/cli/commit/6f9cb490e7299976c43c6a118036c130671fe188) [#4614](https://github.com/npm/cli/pull/4614) fix(arborist): handle link nodes in old lockfiles correctly ([@nlf](https://github.com/nlf))
  * [`18b8b9435`](https://github.com/npm/cli/commit/18b8b94357d8f57301fbaa0f1e5dc2cf1128bf3e) [#4617](https://github.com/npm/cli/pull/4617) fix(arborist): make sure resolveParent exists before checking props ([@nlf](https://github.com/nlf))
  * [`bd96ae407`](https://github.com/npm/cli/commit/bd96ae4071f9cc8a65e741f414db12e98537971d) [#4599](https://github.com/npm/cli/pull/4599) fix(arborist): identify and repair invalid nodes in the virtual tree ([@nlf](https://github.com/nlf))
  * [`99d884542`](https://github.com/npm/cli/commit/99d88454248f950b82652b592fe2b4d019c1060b) [#4599](https://github.com/npm/cli/pull/4599) fix: make sure we loadOverrides on the root node in loadVirtual() ([@nlf](https://github.com/nlf))
  * [`45dd8b861`](https://github.com/npm/cli/commit/45dd8b8615bb1d7a93e1733746581049a1f399e6) [#4609](https://github.com/npm/cli/pull/4609) fix: move shellout logic into commands ([@wraithgar](https://github.com/wraithgar))
  * [`a64acc0bf`](https://github.com/npm/cli/commit/a64acc0bf01e4bc68b26ead5b2d5c6db47ef16c2) [#4609](https://github.com/npm/cli/pull/4609) fix: really load all commands in tests, add description to birthday ([@wraithgar](https://github.com/wraithgar))
  * [`d8dcc02cf`](https://github.com/npm/cli/commit/d8dcc02cfd354c1314c45d6530ec926cd138210c) [#4609](https://github.com/npm/cli/pull/4609) fix: consolidate command alias code ([@wraithgar](https://github.com/wraithgar))
  * [`f76d4f2f6`](https://github.com/npm/cli/commit/f76d4f2f661bcc2534f541ee0e7d683155372baf) [#4609](https://github.com/npm/cli/pull/4609) fix: consolidate is-windows code ([@wraithgar](https://github.com/wraithgar))
  * [`57d8f75eb`](https://github.com/npm/cli/commit/57d8f75eb864486f6aa17bb3dd2f213b5c148073) [#4609](https://github.com/npm/cli/pull/4609) fix: consolidate node version support logic ([@wraithgar](https://github.com/wraithgar))
  * [`0a957f5e2`](https://github.com/npm/cli/commit/0a957f5e2fbcce51c407d22b19e38004d09c51af) [#4609](https://github.com/npm/cli/pull/4609) fix: consolidate path delimiter logic ([@wraithgar](https://github.com/wraithgar))
  * [`738a40445`](https://github.com/npm/cli/commit/738a404454677b78b25ce82a8d2e4c1f46d57ffa) [#4609](https://github.com/npm/cli/pull/4609) fix: bump knownBroken to <12.5.0 ([@wraithgar](https://github.com/wraithgar))
  * [`8b65bfd5d`](https://github.com/npm/cli/commit/8b65bfd5d610a70e1a860936be1a47f3a3df7f32) [#4629](https://github.com/npm/cli/pull/4629) fix: return otplease fn results ([@wraithgar](https://github.com/wraithgar))
  * [`d8d374d23`](https://github.com/npm/cli/commit/d8d374d23d34c17e22b52afc1cfb5247cc7c3e1d) [#4632](https://github.com/npm/cli/pull/4632) fix: consolidate split-package-names ([@wraithgar](https://github.com/wraithgar))
  * [`cc0a2ec99`](https://github.com/npm/cli/commit/cc0a2ec9999b956ea654deaf68fd49ae4bf1a1c0) [#4611](https://github.com/npm/cli/pull/4611) fix: work better with system manpages (#4610) ([@d0sboots](https://github.com/d0sboots))
  * [`668ec7f33`](https://github.com/npm/cli/commit/668ec7f33b7a76f5e86a59f7e5a6c0e068a242b1) [#4644](https://github.com/npm/cli/pull/4644) fix: only call npmlog progress methods if explicitly requested ([@lukekarrys](https://github.com/lukekarrys))

### Documentation

  * [`ff1367f01`](https://github.com/npm/cli/commit/ff1367f01b9dd924d039b5a6b58399101cac99ca) [#4641](https://github.com/npm/cli/pull/4641) docs: recommend prepare over prepublish ([@verhovsky](https://github.com/verhovsky))
  
### Dependencies

  * [`6df061ec2`](https://github.com/npm/cli/commit/6df061ec2a52882693ed86a3524ac6af0f88acd8) [#4594](https://github.com/npm/cli/pull/4594) deps: `npm-registry-fetch@13.1.0`
  * [`6dd1139c9`](https://github.com/npm/cli/commit/6dd1139c9f302ac71f47a75e70bbe9cdf2e64960) [#4594](https://github.com/npm/cli/pull/4594) deps: `cacache@16.0.3`
  * [`feb4446d5`](https://github.com/npm/cli/commit/feb4446d50a7b6a61e44a92b78e1e1af2d89a725) [#4616](https://github.com/npm/cli/pull/4616) deps: `make-fetch-happen@10.1.0`
  * [`c33b53311`](https://github.com/npm/cli/commit/c33b5331120d8304e0f090ceda55e19cc6f451f4) [#4613](https://github.com/npm/cli/pull/4613) deps: `minipass-fetch@2.1.0`
  * [`6a4c8ff89`](https://github.com/npm/cli/commit/6a4c8ff89acc98409060f5aa55b2f1a795a6b66c) [#4606](https://github.com/npm/cli/pull/4606) deps: `npm-audit-report@3.0.0`
  * [`6e0a131d2`](https://github.com/npm/cli/commit/6e0a131d2ff3143856f388bb42c6568d5312c451) [#4627](https://github.com/npm/cli/pull/4627) deps: `debug@4.3.4`
  * [`0f1cd60a1`](https://github.com/npm/cli/commit/0f1cd60a1cdb643782ae86a5a7fce84e357dbf10) [#4627](https://github.com/npm/cli/pull/4627) deps: `proc-log@2.0.1`
  * [`da377eed5`](https://github.com/npm/cli/commit/da377eed5cba72185b90f5fc32ef288331c856ef) [#4627](https://github.com/npm/cli/pull/4627) deps: `parse-conflict-json@2.0.2`
  * [`726a8a07a`](https://github.com/npm/cli/commit/726a8a07afeb3bd24979307679ce7e63c73b178e) [#4627](https://github.com/npm/cli/pull/4627) deps: `gauge@4.0.4`
  * [`aac01b89c`](https://github.com/npm/cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08) [#4628](https://github.com/npm/cli/pull/4628) deps: `@npmcli/template-oss@3.2.1`
  * [`52dfaf239`](https://github.com/npm/cli/commit/52dfaf239a3f66a05ee9d6148bc41a46b5adffd6) [#4630](https://github.com/npm/cli/pull/4630) deps: `make-fetch-happen@10.1.1`
  * [`9778a5387`](https://github.com/npm/cli/commit/9778a5387771256fc81e3587922c12ec47f750ea) [#4635](https://github.com/npm/cli/pull/4635) deps: `init-package-json@3.0.2`
  * [`86eff5dcc`](https://github.com/npm/cli/commit/86eff5dccb9bce2eb8d80706e8dea855faf753b3) [#4635](https://github.com/npm/cli/pull/4635) deps: `npm-package-arg@9.0.2`
  * [`5b4cbb217`](https://github.com/npm/cli/commit/5b4cbb2175bfa35e347fe94e21d49a05ea64ead1) [#4635](https://github.com/npm/cli/pull/4635) deps: `validate-npm-package-name@4.0.0`
  * [`a59fd2cb8`](https://github.com/npm/cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f) [#4639](https://github.com/npm/cli/pull/4639) deps: `@npmcli/template-oss@3.2.2`
  * [`679e569d5`](https://github.com/npm/cli/commit/679e569d5778aef312b37c1ba3bda0171366c9fb) [#4655](https://github.com/npm/cli/pull/4655) deps: `@npmcli/arborist@5.0.4`

## v8.5.5 (2022-03-17)

### Bug Fixes
  
  * [`0e7511d14`](https://github.com/npm/cli/commit/0e7511d144bdb6624e4c0fdfb31b4b42ed2954c9) [#4261](https://github.com/npm/cli/pull/4261) fix(arborist): _findMissingEdges missing dependency due to inconsistent path separators ([@salvadorj](https://github.com/salvadorj))
  * [`c83069436`](https://github.com/npm/cli/commit/c83069436ef4af75eaef071bc181ba1ab49729e9) [#4547](https://github.com/npm/cli/pull/4547) fix: omit bots from authors ([@wraithgar](https://github.com/wraithgar))
  * [`f66da2ed8`](https://github.com/npm/cli/commit/f66da2ed8948fbfa919dd5debe52eafe2018735c) [#4565](https://github.com/npm/cli/pull/4565) fix(owner): bypass cache when fetching packument ([@wraithgar](https://github.com/wraithgar))
  * [`f0c6e86ca`](https://github.com/npm/cli/commit/f0c6e86ca5920baa85355af3ea50ed13f7429a10) [#4572](https://github.com/npm/cli/pull/4572) fix: remove name from unpublished message ([@wraithgar](https://github.com/wraithgar))
  * [`f7e58fa74`](https://github.com/npm/cli/commit/f7e58fa74d9008731b86c82f75251ca295056cf1) [#4572](https://github.com/npm/cli/pull/4572) fix: remove "bug the author" message from package 404 ([@wraithgar](https://github.com/wraithgar))
  * [`5471ff5fe`](https://github.com/npm/cli/commit/5471ff5fe8f74f46cdc2bb056ba9b496c7dd1a78) [#4573](https://github.com/npm/cli/pull/4573) fix: add isntall alias to install ([@wraithgar](https://github.com/wraithgar))
  * [`84d19210e`](https://github.com/npm/cli/commit/84d19210e5604775a3a413aa32cbba2c103933f2) [#4576](https://github.com/npm/cli/pull/4576) fix: properly show `npm view ./directory` ([@wraithgar](https://github.com/wraithgar))
  * [`e9a2981f5`](https://github.com/npm/cli/commit/e9a2981f55f84ff521ef597883a4e732d08ce1c1) [#4578](https://github.com/npm/cli/pull/4578) fix(arborist): save workspace version ([@ruyadorno](https://github.com/ruyadorno))
  
### Documentation
  
  * [`a30405258`](https://github.com/npm/cli/commit/a304052580c070a1f8c1c0cf8cbeec615c46af02) [#4580](https://github.com/npm/cli/pull/4580) docs: add foreground-scripts and ignore-scripts to commands ([@wraithgar](https://github.com/wraithgar))
  * [`2361a68e1`](https://github.com/npm/cli/commit/2361a68e14f893e97dad53d66fde32082e23521a) [#4582](https://github.com/npm/cli/pull/4582) docs: add isntall alias to install command ([@wraithgar](https://github.com/wraithgar))
  * [`8ff1dfaae`](https://github.com/npm/cli/commit/8ff1dfaaeeb32e88c879b96a786835fe13526a88) [#4575](https://github.com/npm/cli/pull/4575) docs: explain that linked deps need `npm install` ran in them ([@wraithgar](https://github.com/wraithgar))
  * [`ddbb505ec`](https://github.com/npm/cli/commit/ddbb505ec6077576e0a9d00a14b43d32d69e4f9e) [#4574](https://github.com/npm/cli/pull/4574) docs: explain that git-tag-version=false does not commit ([@wraithgar](https://github.com/wraithgar))
  * [`7c878b978`](https://github.com/npm/cli/commit/7c878b9781be2e2151f41bd29d46c33e421aeb10) [#4584](https://github.com/npm/cli/pull/4584) docs: fix unpublish docs to auto generate usage ([@wraithgar](https://github.com/wraithgar))
  
### Dependencies
  
  * [`fcc6acfa8`](https://github.com/npm/cli/commit/fcc6acfa808aa556748544edf4e9b73262f77608) [#4562](https://github.com/npm/cli/pull/4562) deps: `@npmcli/metavuln-calculator@3.0.1`
  * [`6d3145014`](https://github.com/npm/cli/commit/6d3145014861b4198c16d7772d809fd037ece289) [#4562](https://github.com/npm/cli/pull/4562) deps: `pacote@13.0.4`
  * [`f6b771aab`](https://github.com/npm/cli/commit/f6b771aabece09dca2231426d4f681d3578e5ab7) [#4562](https://github.com/npm/cli/pull/4562) deps: `make-fetch-happen@10.0.6`
  * [`e26548fb1`](https://github.com/npm/cli/commit/e26548fb12a3bb23fbe32a336f1305e083aa51c0) [#4562](https://github.com/npm/cli/pull/4562) deps: `cacache@16.0.0`
  * [`915dda7ab`](https://github.com/npm/cli/commit/915dda7abeedf79cfe0dde1bd55d80115e2a795d) [#4562](https://github.com/npm/cli/pull/4562) deps: `init-package-json@3.0.1`
  * [`f2ec2ef1f`](https://github.com/npm/cli/commit/f2ec2ef1f7a639ea292d6ab442d588ed72198857) [#4562](https://github.com/npm/cli/pull/4562) deps: `read-package-json@5.0.0`
  * [`340fa51f4`](https://github.com/npm/cli/commit/340fa51f423a518a96c8015a67d8f6144a2e8051) [#4562](https://github.com/npm/cli/pull/4562) deps: `pacote@13.0.5`
  * [`9555a5f1d`](https://github.com/npm/cli/commit/9555a5f1d135aa1b8f7374273403efe41e99ee26) [#4562](https://github.com/npm/cli/pull/4562) deps: `npm-package-arg@9.0.1`
  * [`b2a494283`](https://github.com/npm/cli/commit/b2a494283f45a25d1b87bc40bf2d68812871e89c) [#4562](https://github.com/npm/cli/pull/4562) deps: `normalize-package-data@4.0.0`
  * [`1cb88f4b3`](https://github.com/npm/cli/commit/1cb88f4b31019af9cb8eac8a46433b44bba9d061) [#4562](https://github.com/npm/cli/pull/4562) deps: `hosted-git-info@5.0.0`
  * [`f95396a03`](https://github.com/npm/cli/commit/f95396a033b75e2a3e9aa83f0b06c527641027a4) [#4562](https://github.com/npm/cli/pull/4562) deps: `cacache@16.0.1`
  * [`aec2bfecc`](https://github.com/npm/cli/commit/aec2bfecca4ad3ee7db4481cf068add9c42e7160) [#4585](https://github.com/npm/cli/pull/4585) deps: `cacache@16.0.2`
  * [`ed8ab63e4`](https://github.com/npm/cli/commit/ed8ab63e4a2c8e6527bf7d49736d1bbb6f0aead2) deps: `libnpmpack@4.0.2`
  * [`0b73bfa82`](https://github.com/npm/cli/commit/0b73bfa82d4eb826ec0dbda4cc457c94580e0d64) deps: `libnpmteam@4.0.2`
  * [`475d59b36`](https://github.com/npm/cli/commit/475d59b361ef9e260e21d39361baf92f2272f1d7) deps: `libnpmaccess@6.0.2`
  * [`7201c7395`](https://github.com/npm/cli/commit/7201c7395f66d3faf24b361e69555490d606ed91) deps: `libnpmsearch@5.0.2`
  * [`f5df358c3`](https://github.com/npm/cli/commit/f5df358c3af2c23e7818105608bcceabdd8b62fa) deps: `libnpmorg@4.0.2`
  * [`472e7dd7a`](https://github.com/npm/cli/commit/472e7dd7aa6935cb6b89ec78cbce45f75f3f0044) deps: `libnpmhook@8.0.2`
  * [`c901d7290`](https://github.com/npm/cli/commit/c901d7290ed09aefe3ba6e8c09cb3126f0d92f95) deps: `libnpmpublish@6.0.2`
  * [`aad53327f`](https://github.com/npm/cli/commit/aad53327f23b123d0e017338a9a1b65d40f21efe) deps: `@npmcli/arborist@5.0.3`
  * [`b40136bca`](https://github.com/npm/cli/commit/b40136bcaf32232e4cacdb517ce40f61871da159) deps: `libnpmdiff@4.0.2`
  * [`5d91201d1`](https://github.com/npm/cli/commit/5d91201d1c69e3c095a4eedf0f1d702f35b0d8c1) deps: `libnpmexec@4.0.2`

## v8.5.4 (2022-03-10)

### Bug Fixes

* [`fbdb43138`](https://github.com/npm/cli/commit/fbdb43138ab8e682efb7668767465e7066d43b9f)
  [#4529](https://github.com/npm/cli/pull/4529)
  fix(rebuild): don't run lifecycle scripts twice on linked deps
  ([@wraithgar](https://github.com/wraithgar))
* [`1c182e11d`](https://github.com/npm/cli/commit/1c182e11d524294d85348a3c2566f266bd281c00)
  [#4495](https://github.com/npm/cli/pull/4495)
  fix(doctor): don't retry ping
  ([@wraithgar](https://github.com/wraithgar))
* [`55ab38c53`](https://github.com/npm/cli/commit/55ab38c5337de76b739c4f0cdfb8932dc5420ce4)
  [#4495](https://github.com/npm/cli/pull/4495)
  fix(doctor): allow for missing local bin and `node_modules`
  ([@wraithgar](https://github.com/wraithgar))
* [`5c06a33e6`](https://github.com/npm/cli/commit/5c06a33e641594c5617a0606c338fc54c64d623b)
  [#4528](https://github.com/npm/cli/pull/4528)
  fix: clean up owner command and otplease
  ([@wraithgar](https://github.com/wraithgar))

### Documentation

* [`2485064da`](https://github.com/npm/cli/commit/2485064da590ef787e94a952e0bbdcd9f4880703)
  [#4524](https://github.com/npm/cli/pull/4524)
  docs: fix typo in configuring-npm/package-json.md
  ([@dlcmh](https://github.com/dlcmh))
* [`91f03ee61`](https://github.com/npm/cli/commit/91f03ee618bc635f9cfbded735fe98bbfa9d643f)
  [#4510](https://github.com/npm/cli/pull/4510)
  docs: standardize changelog heading
  ([@wraithgar](https://github.com/wraithgar))

### Dependencies

* [`377f55e0e`](https://github.com/npm/cli/commit/377f55e0e786ac6c26d64848a89ce720c5d478eb)
  [#4530](https://github.com/npm/cli/pull/4530)
  deps: `make-fetch-happen@10.0.5`
    * add code property to unsupported proxy url error
* [`40b7fbf67`](https://github.com/npm/cli/commit/40b7fbf670c8ba064b3a771981fa0510d63fb6ef)
  [#4531](https://github.com/npm/cli/pull/4531)
  deps: `read-package-json@4.1.2`
    * don't throw exception on invalid main attr
* [`d9dc70ce4`](https://github.com/npm/cli/commit/d9dc70ce4d632b8b0401c41e9a015b8083e87db1)
  [#4545](https://github.com/npm/cli/pull/4545)
  deps: `map-workspaces@2.0.2`
    * evaluate all patterns before throwing `EDUPLICATEWORKSPACE`
* [`70fcfb46b`](https://github.com/npm/cli/commit/70fcfb46bebc777e0ef6b36a47d9620807488acd)
  deps: `libnpmfund@3.0.1`
* [`621cd033f`](https://github.com/npm/cli/commit/621cd033f64f101084af83ff8a797f5415a3b70d)
  deps: `@npmcli/arborist@5.0.2`
* [`087fdc4cb`](https://github.com/npm/cli/commit/087fdc4cb4d6582b2b628087f866e8ca8bc00934)
  deps: `libnpmpublish@6.0.1`
* [`d24c6d288`](https://github.com/npm/cli/commit/d24c6d288b1cfe6dd893a8ffedb15cbe6837d545)
  deps: `libnpmhook@8.0.1`
* [`fa59830fc`](https://github.com/npm/cli/commit/fa59830fc429d354179853e8f9b9a32ef3444067)
  deps: `libnpmsearch@5.0.1`
* [`6d5f22b86`](https://github.com/npm/cli/commit/6d5f22b86006e7c563161837f56e47079e0fde4a)
  deps: `libnpmexec@4.0.1`
* [`69ea54350`](https://github.com/npm/cli/commit/69ea5435016a9d1c454af7253a80204dc9941380)
  deps: `libnpmaccess@6.0.1`
* [`4742d7cf3`](https://github.com/npm/cli/commit/4742d7cf3ad15f5263fd5fefd15c04f9871c58af)
  deps: `libnpmteam@4.0.1`
* [`fdd255ae9`](https://github.com/npm/cli/commit/fdd255ae9ebf41147085e74cec5c9f65eb5ff1de)
  deps: `libnpmorg@4.0.1`
* [`ed41bc101`](https://github.com/npm/cli/commit/ed41bc10182ffd1db66181c20db6c348dba6783e)
  deps: `libnpmdiff@4.0.1`
* [`21e241025`](https://github.com/npm/cli/commit/21e24102564e2f3c795312d256fade4228e67776)
  deps: `libnpmversion@3.0.1`
* [`ec7f36ff9`](https://github.com/npm/cli/commit/ec7f36ff9e6c973ae5d5998a783bcff16027c282)
  deps: `libnpmpack@4.0.1`
* [`ad4b56414`](https://github.com/npm/cli/commit/ad4b564148eaa6fdfe68e5b68f910e41e4e8ee14)
  deps: `gauge@4.0.3`

## v8.5.3 (2022-03-03)

### Bug Fixes

* [`defe79ad6`](https://github.com/npm/cli/commit/defe79ad6f2f4216bf5e0188256c77b49164eb94)
  [#4480](https://github.com/npm/cli/pull/4480)
  fix: publish of tarballs includes README in packument
  ([@fritzy](https://github.com/fritzy))
* [`45fc297f1`](https://github.com/npm/cli/commit/45fc297f12e63c026715945a186ba0ec4efbdedb)
  [#4479](https://github.com/npm/cli/pull/4479)
  fix: ignore implict workspace for some commands
  ([@fritzy](https://github.com/fritzy))
* [`a0900bdf1`](https://github.com/npm/cli/commit/a0900bdf1ab7a68988984735f1f3885d02ffb67f)
  [#4481](https://github.com/npm/cli/pull/4481)
  fix(ls): respect `--include-workspace-root`
  ([@fritzy](https://github.com/fritzy))
* [`0cfc155db`](https://github.com/npm/cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754)
  [#4476](https://github.com/npm/cli/pull/4476)
  fix: set proper workspace repo urls in package.json
  ([@ljharb](https://github.com/ljharb))
* [`9e43de8a5`](https://github.com/npm/cli/commit/9e43de8a59e5bf354a9595ed8a79fedcec085aaa)
  [#4493](https://github.com/npm/cli/pull/4493)
  fix: ignore implicit workspace for whoami
  ([@nlf](https://github.com/nlf))

### Dependencies

* [`d13f067d9`](https://github.com/npm/cli/commit/d13f067d91283e1dec94780a3c007883de9edc46)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `@npmcli/run-script@3.0.1`
  ([@wraithgar](https://github.com/wraithgar))
* [`ce9a6eac0`](https://github.com/npm/cli/commit/ce9a6eac0c8329871664167c37f4982c5e443a2a)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `node-gyp@9.0.0`
  ([@wraithgar](https://github.com/wraithgar))
* [`bd660f5f1`](https://github.com/npm/cli/commit/bd660f5f1ccc1d9fa88085b168ea05b6dcf5826a)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `@npmcli/config@4.0.1`
* [`3c17b6965`](https://github.com/npm/cli/commit/3c17b6965f0c5fffd5ac908388568a307466a73f)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `make-fetch-happen@10.0.4`
* [`e9b69c4c5`](https://github.com/npm/cli/commit/e9b69c4c5454cc8b7d6cf2cbf1f09313f0d20afc)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `npm-registry-fetch@13.0.1`
* [`cf27ca888`](https://github.com/npm/cli/commit/cf27ca8884387f2b82f8f6900a29e4e41693e774)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `write-file-atomic@4.0.1`
* [`f3421921a`](https://github.com/npm/cli/commit/f3421921aa72ef570105474cdb2e48cec80de796)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `gauge@4.0.2`
* [`1dd2f7ee1`](https://github.com/npm/cli/commit/1dd2f7ee16a61024e520b3efa54f8cdba5458a16)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `socks@2.6.2`
* [`236e3b403`](https://github.com/npm/cli/commit/236e3b4030dd91397713eb02cdf2737dcc988fd7)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `minimatch@3.1.2`
  ([@wraithgar](https://github.com/wraithgar))
* [`10e1326d2`](https://github.com/npm/cli/commit/10e1326d2eb7ff2c70ee19907991b369476ccdd0)
  [#4490](https://github.com/npm/cli/pull/4490)
  deps: `lru-cache@7.4.0`

## v8.5.2 (2022-02-24)

### Bug Fixes

* [`9bdd1ace8`](https://github.com/npm/cli/commit/9bdd1ace86300a8ee562027bbc5cb57d62dc7ba8)
  [#4300](https://github.com/npm/cli/pull/4300)
  fix(arborist): use full location as tracker key when inflating
  ([@lukekarrys](https://github.com/lukekarrys)) ([@kirtangajjar](https://github.com/kirtangajjar))
* [`c9ff797e8`](https://github.com/npm/cli/commit/c9ff797e8b5e5a7b39ced04b1d3f8a0006993a1f)
  [#4457](https://github.com/npm/cli/pull/4457)
  fix: remove html comments from man entries
  ([@wraithgar](https://github.com/wraithgar))
* [`f4c5f0e52`](https://github.com/npm/cli/commit/f4c5f0e52679b1aa42db833fc23dc07d96cc904e)
  fix(arborist): fix unescaped periods (#4462)
  ([@lukekarrys](https://github.com/lukekarrys))
* [`c608512ed`](https://github.com/npm/cli/commit/c608512ed03ccf87dc989cec2849d14bf034513a)
  [#4468](https://github.com/npm/cli/pull/4468)
  fix: ignore integrity values for git dependencies
  ([@lukekarrys](https://github.com/lukekarrys))

### Documentation

* [`e83e5c9ba`](https://github.com/npm/cli/commit/e83e5c9bad93e598969088ae780149dbe34c6b5c)
  [#4435](https://github.com/npm/cli/pull/4435)
  docs: clarify npm init @latest behavior
  ([@wraithgar](https://github.com/wraithgar))
* [`d8fa9fa5e`](https://github.com/npm/cli/commit/d8fa9fa5e44d91e1c0170628d4839f7802c65a7f)
  [#4436](https://github.com/npm/cli/pull/4436)
  docs: explain $INIT_CWD on using scripts page
  ([@wraithgar](https://github.com/wraithgar))
* [`6b68c1aaa`](https://github.com/npm/cli/commit/6b68c1aaa282205eb4d47dbc81909c11851f7e06)
  [#4450](https://github.com/npm/cli/pull/4450)
  docs: auto-generate npm usage for each command
  ([@manekinekko](https://github.com/manekinekko))

### Dependencies

* [`d58e4442b`](https://github.com/npm/cli/commit/d58e4442b0a16c84219d5f80ab88ef68ad209918)
  deps `@npmcli/arborist@5.0.0`
* [`77399cb98`](https://github.com/npm/cli/commit/77399cb988d984133bfc2885a6407ffc56b9152d)
  deps: `libnpmaccess@6.0.0`
* [`9633752cd`](https://github.com/npm/cli/commit/9633752cd5c4a0d240adcb24f0ae7e3fafd122ba)
  deps: `libnpmdiff@4.0.0`
* [`938750581`](https://github.com/npm/cli/commit/9387505819f0e7e4b3d76dd3e2bd8636a1bb6306)
  deps: `libnpmexec@4.0.0`
* [`2c86feaf1`](https://github.com/npm/cli/commit/2c86feaf1f974ee510563c7d93c0dd26f6355b15)
  deps: `libnpmfund@3.0.0`
* [`1dab29805`](https://github.com/npm/cli/commit/1dab29805c820f82e4bae18123e911fec6948dfd)
  deps: `libnpmhook@8.0.0`
* [`cf273f1cf`](https://github.com/npm/cli/commit/cf273f1cf31775c8a73cc67b654faf87b44f7f79)
  deps: `libnpmorg@4.0.0`
* [`8b1d9636a`](https://github.com/npm/cli/commit/8b1d9636ad2374254263d154f2b4ca8ea6416f4c)
  deps: `libnpmpack@4.0.0`
* [`67aed0542`](https://github.com/npm/cli/commit/67aed05429163fc120e05e6fb15f8f3cd9c6ef22)
  deps: `libnpmpublish@6.0.0`
* [`8b26a6db1`](https://github.com/npm/cli/commit/8b26a6db13c37a6f0df86c54ca859ad2f9627825)
  deps: `libnpmsearch@5.0.0`
* [`0b2fa7fed`](https://github.com/npm/cli/commit/0b2fa7feda4643fe16c9a492497908f94d310dbd)
  deps: `libnpmteam@4.0.0`
* [`2646d199f`](https://github.com/npm/cli/commit/2646d199f26f77c4197ec0bcf30c3e452844c1ab)
  deps: `libnpmversion@3.0.0`
* [`5b29666e5`](https://github.com/npm/cli/commit/5b29666e566c09dc685108daaa20163dd58ade2b)
  [#4459](https://github.com/npm/cli/pull/4459)
  deps: `columnify@1.6.0 and dedupe vulnerable deps`

## v8.5.1 (2022-02-17)

### Dependencies

* [`54cda9697`](https://github.com/npm/cli/commit/54cda9697b776fae807966097315c7b836623743)
  [#4410](https://github.com/npm/cli/pull/4410)
  fix(arborist): do not audit in offline mode
  ([@mohd-akram](https://github.com/mohd-akram))
* [`fb13bdaf1`](https://github.com/npm/cli/commit/fb13bdaf12dde3ef5685a77354e51a9cfa579879)
  [#4403](https://github.com/npm/cli/pull/4403)
  deps: `@npmcli/ci-detect@2.0.0`
* [`702801002`](https://github.com/npm/cli/commit/702801002e99bf02dd4d6d1e447a5ab332d56c79)
  [#4415](https://github.com/npm/cli/pull/4415)
  deps: `make-fetch-happen@10.0.3`
* [`88bab3540`](https://github.com/npm/cli/commit/88bab354097023c96c49e78d7ee54159f495bf73)
  [#4416](https://github.com/npm/cli/pull/4416)
  deps: `gauge@4.0.1`

### Documentation

* [`20378c67c`](https://github.com/npm/cli/commit/20378c67cd533db514dd2aec7828c6d119e9d6c7)
  [#4423](https://github.com/npm/cli/pull/4423)
  docs: update documentation for ping
  ([@fhinkel](https://github.com/fhinkel))
* [`408d2fc15`](https://github.com/npm/cli/commit/408d2fc150185ef66125f7d6bdb1c25edb71bba3)
  [#4426](https://github.com/npm/cli/pull/4426)
  docs: update workspaces guide for consistency
  ([@bnb](https://github.com/bnb))
* [`9275856eb`](https://github.com/npm/cli/commit/9275856eb75e7c394a3c7617c2b495aba35ee2de)
  [#4424](https://github.com/npm/cli/pull/4424)
  docs: update usage example for npm pkg
  ([@manekinekko](https://github.com/manekinekko))
* [`20c83fae7`](https://github.com/npm/cli/commit/20c83fae76ff4a051e4f6542a328f1c00cf071bb)
  [#4428](https://github.com/npm/cli/pull/4428)
  docs: update docs for npm install <folder\>
  ([@manekinekko](https://github.com/manekinekko))

## v8.5.0 (2022-02-10)

### Features

* [`0cc9d4c51`](https://github.com/npm/cli/commit/0cc9d4c51a337af0edd2e20c6fadb26807e5d09f)
  [#4372](https://github.com/npm/cli/pull/4372)
  feat(deps): `@npmcli/config@3.0.0 - introduce automatic workspace roots`
  ([@nlf](https://github.com/nlf))

### Bug Fixes

* [`fb6e2ddf9`](https://github.com/npm/cli/commit/fb6e2ddf942bacf5ae745d16c2d57f3836dce75a)
  [#4386](https://github.com/npm/cli/pull/4386)
  fix(log): pass in logger to more external modules
  ([@wraithgar](https://github.com/wraithgar))
* [`0e231d4a4`](https://github.com/npm/cli/commit/0e231d4a40526608411aca0a6e7cf27c750f2409)
  [#4389](https://github.com/npm/cli/pull/4389)
  fix(pack): let libnpmpack take care of file writes
  ([@nlf](https://github.com/nlf))
* [`e2f1f7b04`](https://github.com/npm/cli/commit/e2f1f7b045a3ae9840f431cb4266ba046831247b)
  [#4389](https://github.com/npm/cli/pull/4389)
  fix(publish): pass dryRun: true to libnpmpack so it doesnt write a tarball
  ([@nlf](https://github.com/nlf))
* [`2937b43d4`](https://github.com/npm/cli/commit/2937b43d4629225d83b6c71833df00743209f5ff)
  [#4389](https://github.com/npm/cli/pull/4389)
  fix(config): add pack-destination flattener
  ([@nlf](https://github.com/nlf))

### Documentation

* [`b836d596f`](https://github.com/npm/cli/commit/b836d596f9d98cd7849882000cad11ad2a0b9a26)
  [#4384](https://github.com/npm/cli/pull/4384)
  docs: add cross-references between npx and npm exec
  ([@Delapouite](https://github.com/Delapouite))
* [`f3fbeea5a`](https://github.com/npm/cli/commit/f3fbeea5a173902ca7455c6c94a9e677591b0410)
  [#4388](https://github.com/npm/cli/pull/4388)
  docs: add --save-bundle to --save usage output
  ([@wraithgar](https://github.com/wraithgar))

### Dependencies

* [`8732f393e`](https://github.com/npm/cli/commit/8732f393ee547e2eada4317613599517c1d8ec0a)
  deps: `@npmcli/arborist@4.3.1`
    * [`2ba09cc0d`](https://github.com/npm/cli/commit/2ba09cc0d7d56a064aa67bbb1881d381e6504888)
      [#4371](https://github.com/npm/cli/pull/4371)
      fix(arborist): check if a spec is a workspace before fetching a manifest, closes #3637
      ([@nlf](https://github.com/nlf))
    * [`e631faf7b`](https://github.com/npm/cli/commit/e631faf7b5f414c233d723ee11413264532b37de)
      [#4387](https://github.com/npm/cli/pull/4387)
      fix(arborist): save bundleDependencies to package.json when reifying
      ([@wraithgar](https://github.com/wraithgar))
* [`d3a7c15e1`](https://github.com/npm/cli/commit/d3a7c15e1e3d305a0bf781493406dfb1fdbaca35)
  deps: `libnpmpack@3.1.0`
    * [`4884821f6`](https://github.com/npm/cli/commit/4884821f637ca1992b494fbdbd94d000e4428a40)
      [#4389](https://github.com/npm/cli/pull/4389)
      feat(libnpmpack): write tarball file when dryRun === false
      ([@nlf](https://github.com/nlf))
* [`ab926995e`](https://github.com/npm/cli/commit/ab926995e43ccdd048a6e1164b436fea1940f932)
  [#4393](https://github.com/npm/cli/pull/4393)
  deps: `npm-registry-fetch@12.0.2`
* [`1c0d0699c`](https://github.com/npm/cli/commit/1c0d0699c13e1cb36a69f2ac4acdb78ea205aa3e)
  [#4394](https://github.com/npm/cli/pull/4394)
  deps: `npmlog@6.0.1`
    * changed notice color from blue to cyan for improved readability
* [`3c33a5842`](https://github.com/npm/cli/commit/3c33a584213e4f2230f3b912fad2c2f5786906fb)
  [#4400](https://github.com/npm/cli/pull/4400)
  deps: `make-fetch-happen@10.0.2`

## v8.4.1 (2022-02-03)

### Bug Fixes

* [`1b9338554`](https://github.com/npm/cli/commit/1b9338554fc006954fae54c25c33e64e26ae997e)
  [#4359](https://github.com/npm/cli/pull/4359)
  fix(log): pass in logger to external modules
  ([@wraithgar](https://github.com/wraithgar))
* [`457e0ae61`](https://github.com/npm/cli/commit/457e0ae61bbc55846f5af44afa4066921923490f)
  [#4363](https://github.com/npm/cli/pull/4363)
  fix(ci): lock file validation
  ([@ruyadorno](https://github.com/ruyadorno))
* [`c0519edc1`](https://github.com/npm/cli/commit/c0519edc16f66370b2153430342247b4ec5cb496)
  [#4364](https://github.com/npm/cli/pull/4364)
  fix(ci): should not use package-lock config
  ([@ruyadorno](https://github.com/ruyadorno))
* [`ebb428375`](https://github.com/npm/cli/commit/ebb428375cd417c096d5a648df92620dc4215a3d)
  [#4365](https://github.com/npm/cli/pull/4365)
  fix(outdated): parse aliased modules
  ([@ruyadorno](https://github.com/ruyadorno))

### Documentation

* [`0b0a7cc76`](https://github.com/npm/cli/commit/0b0a7cc767947ea738da50caa832d8a922e20ac6)
  [#4361](https://github.com/npm/cli/pull/4361)
  docs: bundleDependencies can be a boolean.
  ([@forty](https://github.com/forty))

### Dependencies

* [`3d41447b9`](https://github.com/npm/cli/commit/3d41447b961a72f1ce541fea252d0cd462399c76)
  [#4353](https://github.com/npm/cli/pull/4353)
  deps: `wide-align@1.1.5`
* [`dc1a0573a`](https://github.com/npm/cli/commit/dc1a0573ace328d985a741af76d03752b1dbf1ff)
  [#4353](https://github.com/npm/cli/pull/4353)
  deps: `socks-proxy-agent@6.1.1`
* [`adcefef6b`](https://github.com/npm/cli/commit/adcefef6b953e0804f4a2de3a1912321f44c4a7e)
  [#4353](https://github.com/npm/cli/pull/4353)
  deps: `spdx-license-ids@3.0.11`
* [`d7e2499e0`](https://github.com/npm/cli/commit/d7e2499e073301a62607266d3ab8f9b63d630fb5)
  [#4353](https://github.com/npm/cli/pull/4353)
  deps: `debug@4.3.3`
* [`f0f307140`](https://github.com/npm/cli/commit/f0f30714002db979a2707d85c65bb92ae0ff76fe)
  [#4353](https://github.com/npm/cli/pull/4353)
  deps: `@npmcli/fs@1.1.0`
* [`1cb107d33`](https://github.com/npm/cli/commit/1cb107d33d7e1499d92c3405fa0694142bdee8df)
  [#4353](https://github.com/npm/cli/pull/4353)
  deps: `is-core-module@2.8.1`
* [`e198ac0d1`](https://github.com/npm/cli/commit/e198ac0d1c1e536db57e84af6e7f40089b4c1bfc)
  [#4354](https://github.com/npm/cli/pull/4354)
  deps: `cli-table3@0.6.1`
* [`5a84e6515`](https://github.com/npm/cli/commit/5a84e6515a0331be20395ce2a6b1e892ecea20f8)
  [#4355](https://github.com/npm/cli/pull/4355)
  deps: `graceful-fs@4.2.9`

## v8.4.0 (2022-01-27)

### Features

* [`fbe48a840`](https://github.com/npm/cli/commit/fbe48a84047e0c5de31bdaa84707f0f8fdcef71d)
  [#4307](https://github.com/npm/cli/pull/4307)
  feat(arborist): add named updates validation
  ([@ruyadorno](https://github.com/ruyadorno))

### Bug Fixes

* [`1f853f8bf`](https://github.com/npm/cli/commit/1f853f8bf7cecd1222703dde676a4b664526141d)
  [#4306](https://github.com/npm/cli/pull/4306)
  fix(arborist): load actual tree on named updates
  ([@ruyadorno](https://github.com/ruyadorno))
* [`90c384ccc`](https://github.com/npm/cli/commit/90c384ccccac32c80c481a04c438cbcbea82539c)
  [#4326](https://github.com/npm/cli/pull/4326)
  fix(logout): require proper auth.js from npm-registry-fetch
  ([@wraithgar](https://github.com/wraithgar))
* [`fabcf431a`](https://github.com/npm/cli/commit/fabcf431a63ecf93b56ae5d9a05ad4e7ef280c2a)
  [#4327](https://github.com/npm/cli/pull/4327)
  fix(arborist): correctly load overrides on workspace edges, closes #4205
  ([@nlf](https://github.com/nlf))
* [`8c3b143ca`](https://github.com/npm/cli/commit/8c3b143ca20d0da56c0ce2764e288a4c203b9f93)
  [#4258](https://github.com/npm/cli/pull/4258)
  fix(arborist): shrinkwrap throws when trying to read a folder without permissions
  ([@Linkgoron](https://github.com/Linkgoron))
* [`b51b29c56`](https://github.com/npm/cli/commit/b51b29c563fa97aa4fbf38250d1f04e879a8d961)
  [#4334](https://github.com/npm/cli/pull/4334)
  fix(arborist): update save exact
  ([@ruyadorno](https://github.com/ruyadorno))

### Dependencies

* [`8558527c7`](https://github.com/npm/cli/commit/8558527c7158b2c1c353f8ab9c31de2a66ab470e)
  [#4333](https://github.com/npm/cli/pull/4333)
  deps: `make-fetch-happen@10.0.0`
    * compress option and accept/content encoding header edge cases
    * strip cookie header on redirect across hostnames
* [`1bfc507f2`](https://github.com/npm/cli/commit/1bfc507f2a5afa02f04d4dea2fc6d151d4fef3ac)
  [#4326](https://github.com/npm/cli/pull/4326)
  deps: `npm-registry-fetch@12.0.1`
* [`52c9608e7`](https://github.com/npm/cli/commit/52c9608e7bb1cda396b2cef3fc1b48dbaa2b7de3)
  [#4326](https://github.com/npm/cli/pull/4326)
  deps: `pacote@12.0.3`
* [`2bbeedfeb`](https://github.com/npm/cli/commit/2bbeedfebb3aea082d612deb5e4d9de9e550c529)
  [#4326](https://github.com/npm/cli/pull/4326)
  deps: `npm-profile@6.0.0`
* [`9652d685b`](https://github.com/npm/cli/commit/9652d685b1e4bd21cec107a611c2e307387623d6)
  chore(release): `@npmcli/arborist@4.3.0`
  ([@wraithgar](https://github.com/wraithgar))
* [`0ee4927d2`](https://github.com/npm/cli/commit/0ee4927d2e8206dd24fa7eea5e1c10ea649ecc49)
  chore(release): `libnpmaccess@5.0.1`
  ([@wraithgar](https://github.com/wraithgar))
* [`6c0dc1ffb`](https://github.com/npm/cli/commit/6c0dc1ffb70858be1e9ca9afdb6950e39609a367)
  chore(release): `libnpmexec@3.0.3`
  ([@wraithgar](https://github.com/wraithgar))
* [`41b8f7b6f`](https://github.com/npm/cli/commit/41b8f7b6ff62f0e738865eb8e98df8650f5467bd)
  chore(release): `libnpmorg@3.0.1`
  ([@wraithgar](https://github.com/wraithgar))
* [`433e6aafb`](https://github.com/npm/cli/commit/433e6aafbbf56efcf71e991767a6f00afe4aba7c)
  chore(release): `libnpmpublish@5.0.1`
  ([@wraithgar](https://github.com/wraithgar))
* [`6654b6efe`](https://github.com/npm/cli/commit/6654b6efe02666bdb9864f4608e477ba132fd215)
  chore(release): `libnpmsearch@4.0.1`
  ([@wraithgar](https://github.com/wraithgar))
* [`3423a9804`](https://github.com/npm/cli/commit/3423a980436492b7f0ee9e002517387a801f4f4a)
  chore(release): `libnpmteam@3.0.1`
  ([@wraithgar](https://github.com/wraithgar))
* [`fb03e485d`](https://github.com/npm/cli/commit/fb03e485d9b1f09eb1cbcce00ee8e3e5c012097f)
  chore(release): `libnpmhook@7.0.1`
  ([@wraithgar](https://github.com/wraithgar))

## v8.3.2 (2022-01-20)

### Bug Fixes

* [`cfd59b8c8`](https://github.com/npm/cli/commit/cfd59b8c81078f842328b13a23a234150842cd58)
  [#4223](https://github.com/npm/cli/pull/4223)
  fix: npm update --save
  ([@ruyadorno](https://github.com/ruyadorno))
* [`510f0ecbc`](https://github.com/npm/cli/commit/510f0ecbc9970ed8c8993107cc03cf27b7b996dc)
  [#4218](https://github.com/npm/cli/pull/4218)
  fix(arborist): ensure indentation is preserved
  ([@ljharb](https://github.com/ljharb))
* [`c99c2151a`](https://github.com/npm/cli/commit/c99c2151a868672c017f64ff0ecb12149a2fb095)
  [#4230](https://github.com/npm/cli/pull/4230)
  fix(arborist): prioritize valid workspace nodes
  ([@nlf](https://github.com/nlf))
* [`14a3d9500`](https://github.com/npm/cli/commit/14a3d95000f1cba937f3309d198a363ae65cf01f)
  [#4265](https://github.com/npm/cli/pull/4265)
  fix: resolve workspace paths from cwd when possible
  ([@nlf](https://github.com/nlf))

### Dependencies

* [`2ef9f9847`](https://github.com/npm/cli/commit/2ef9f9847c11fe8c0c0494558fe77c15ac4dbc80)
  [#4254](https://github.com/npm/cli/pull/4254)
  deps: `bin-links@3.0.0 write-file-atomic@4.0.0`

## v8.3.1 (2022-01-13)

### Bug Fixes

* [`2ac540b0c`](https://github.com/npm/cli/commit/2ac540b0ccd016a14676ad891758e8d9e903a12c)
  fix(unpublish): Show warning on unpublish command when last version (#4191)
  ([@ebsaral](https://github.com/ebsaral))

### Dependencies

* [`da80d579d`](https://github.com/npm/cli/commit/da80d579d1f1db61894c54f7b9b3623394882c16)
  [#4211](https://github.com/npm/cli/pull/4211)
  deps: `hosted-git-info@4.1.0`
  * feat: Support Sourcehut
* [`5a87d190f`](https://github.com/npm/cli/commit/5a87d190f38af9f2f98084d9b476184dbcaf1429)
  [#4228](https://github.com/npm/cli/pull/4228)
  deps: `@npmcli/config@2.4.0`
* [`1f0d1370f`](https://github.com/npm/cli/commit/1f0d1370ff6bf2ca978ef0d7d32640314c62204e)
  chore(release): `@npmcli/arborist@4.2.0`
  * [`3cfae3840`](https://github.com/npm/cli/commit/3cfae384011a8b291cc82cc02b56bc114557a9e5)
    [#4181](https://github.com/npm/cli/pull/4181)
    feat(arborist) add `toJSON`/`toString` methods to get shrinkwrap contents without saving
    ([@ljharb](https://github.com/ljharb))

### Chores

* [`d72650457`](https://github.com/npm/cli/commit/d7265045730555c03b3142c004c7438e9577028c)
  chore: Bring in all libnpm modules + arborist as workspaces (#4166)
  ([@fritzy](https://github.com/fritzy))


## v8.3.0 (2021-12-09)

### Features

* [`4b0c29a7c`](https://github.com/npm/cli/commit/4b0c29a7c5860410c7b453bec389c54cb21dbde3)
  [#4116](https://github.com/npm/cli/issues/4116)
  feat: `@npmcli/arborist@4.1.0`
  * introduces overrides
  ([@nlf](https://github.com/nlf))
* [`166d9e144`](https://github.com/npm/cli/commit/166d9e144b38087ee5e7d8aaf6ec7d602cf2957c)
  [npm/statusboard#416](https://github.com/npm/statusboard/issues/416)
  [#4143](https://github.com/npm/cli/issues/4143)
  feat: output configured registry during publish
  ([@lukekarrys](https://github.com/lukekarrys))
* [`71777be17`](https://github.com/npm/cli/commit/71777be17e57179d203cb9162664ecd0c36ca633)
  [npm/statusboard#417](https://github.com/npm/statusboard/issues/417)
  [#4146](https://github.com/npm/cli/issues/4146)
  feat: display `publishConfig` during `config list`
  ([@lukekarrys](https://github.com/lukekarrys))

### Bug Fixes

* [`08c663931`](https://github.com/npm/cli/commit/08c663931ec1f56d777ffdb38f94926b9eac13ef)
  [#4128](https://github.com/npm/cli/issues/4128)
  [#4134](https://github.com/npm/cli/issues/4134)
  fix: dont warn on error cleaning individual log files
  ([@lukekarrys](https://github.com/lukekarrys))
* [`e605b128c`](https://github.com/npm/cli/commit/e605b128c87620aae843cdbd8f35cc614da3f8a2)
  [#4142](https://github.com/npm/cli/issues/4142)
  fix: redact all private keys from config output
  ([@lukekarrys](https://github.com/lukekarrys))

### Documentation

* [`db1885d7f`](https://github.com/npm/cli/commit/db1885d7fec012f018093c76dec5a9c01a0ca2b0)
  [#4092](https://github.com/npm/cli/issues/4092)
  chore(docs): document overrides
  ([@nlf](https://github.com/nlf))

### Dependencies

* [`e1da1fa4b`](https://github.com/npm/cli/commit/e1da1fa4ba7d95616928d2192b5b9db09b3120bc)
  [#4141](https://github.com/npm/cli/issues/4141)
  deps: `@npmcli/arborist@4.1.1`: `parse-conflict-json@2.0.1`
  * Fixes object property assignment bug in resolving package-locks with
  conflicts
* [`1d8bec566`](https://github.com/npm/cli/commit/1d8bec566cb08ff5ff220f53083323fa8c3fb72e)
  [#4144](https://github.com/npm/cli/issues/4144)
  [#3884](https://github.com/npm/cli/issues/3884)
  deps: `minipass@3.1.6`
  * fixes some TAR_ENTRY_INVALID and Z_DATA_ERROR errors

## v8.2.0 (2021-12-02)

### Features

* [`6734ba36d`](https://github.com/npm/cli/commit/6734ba36dd6e07a859ab4d6eb4f264d2c0022276)
  [#4062](https://github.com/npm/cli/issues/4062)
  feat: streaming debug logfile
  ([@lukekarrys](https://github.com/lukekarrys))

### Bug Fixes

* [`5f4040aa0`](https://github.com/npm/cli/commit/5f4040aa0e30a3b74caab64958770c682e4d0031)
  chore: remove get-project-scope utils
  ([@Yucel Okcu](https://github.com/Yucel Okcu))
* [`c5c6d1603`](https://github.com/npm/cli/commit/c5c6d1603b06df4c10b503047aeed34d6e0c36c2)
  [#4060](https://github.com/npm/cli/issues/4060)
  fix: add missing scope on flat options
  ([@yuqu](https://github.com/yuqu))
* [`47828b766`](https://github.com/npm/cli/commit/47828b766a4a7b50c1245c8f01b99ffbeffd014f)
  chore: update one-time password prompt
  ([@Darcy Clarke](https://github.com/Darcy Clarke))

### Documentation

* [`fc46a7926`](https://github.com/npm/cli/commit/fc46a792621c89354eddc0e1ee2d4f5c26efe5a5)
  [#4072](https://github.com/npm/cli/issues/4072)
  docs: fix typo in `save-peer` description
  ([@chalkygames123](https://github.com/chalkygames123))
* [`2fbf1576f`](https://github.com/npm/cli/commit/2fbf1576f5427babab2bdf314b1760adc5f9a575)
  [#4081](https://github.com/npm/cli/issues/4081)
  docs: Fix typo
  ([@idleberg](https://github.com/idleberg))
* [`a8bc95f11`](https://github.com/npm/cli/commit/a8bc95f11c9d21319581d7b09baf9f864bea21ac)
  [#4089](https://github.com/npm/cli/issues/4089)
  docs(workspaces): Fix typo
  ([@yotamselementor](https://github.com/yotamselementor))
* [`31b098ee2`](https://github.com/npm/cli/commit/31b098ee26ed17facb132278bb3205e80e2a760d)
  [#4113](https://github.com/npm/cli/issues/4113)
  docs: add logging docs
  ([@darcyclarke](https://github.com/darcyclarke))
* [`cbae0fb71`](https://github.com/npm/cli/commit/cbae0fb71cea55004f7066c0dfc870137b53ee8b)
  [#4114](https://github.com/npm/cli/issues/4114)
  docs: update description about where/when debug log is written
  ([@lukekarrys](https://github.com/lukekarrys))


### Dependencies

* [`037f2cc8c`](https://github.com/npm/cli/commit/037f2cc8c8ed9d9a092475a5a07f2a3a88915633)
  [#4078](https://github.com/npm/cli/issues/4078)
  `node-gyp@8.4.1`
* [`0e63df612`](https://github.com/npm/cli/commit/0e63df61283a2f7ace991f72e4577c6f23ffc5df)
  [#4102](https://github.com/npm/cli/issues/4102)
  `@npmcli/config@2.3.2`:
  * fix: always load localPrefix

## v8.1.4 (2021-11-18)

### BUG FIXES

* [`7887fb3d7`](https://github.com/npm/cli/commit/7887fb3d7ba7f05abeb49dd92b76d90422cb38ca)
  [#4025](https://github.com/npm/cli/issues/4025)
  fix: don't try to open file:/// urls
  ([@wraithgar](https://github.com/wraithgar))
* [`cd6d3a90d`](https://github.com/npm/cli/commit/cd6d3a90d4bbf3793834830b4c77fc8eb0846596)
  [#4026](https://github.com/npm/cli/issues/4026)
  fix: explicitly allow `npm help` to open file:/// man pages
  ([@wraithgar](https://github.com/wraithgar))
* [`72ca4a4e3`](https://github.com/npm/cli/commit/72ca4a4e39a1d4de03d6423480aa2ee82b021060)
  [#4020](https://github.com/npm/cli/issues/4020)
  [#4032](https://github.com/npm/cli/issues/4032)
  fix: command completion
  ([@wraithgar](https://github.com/wraithgar))
* [`b78949134`](https://github.com/npm/cli/commit/b789491345aa6fbe345aa3c96fe9f415296ec418)
  [#4023](https://github.com/npm/cli/issues/4023)
  fix(install): command completion with single match
  ([@wraithgar](https://github.com/wraithgar))
* [`44bfa3787`](https://github.com/npm/cli/commit/44bfa378723554195fccf8cf4ca2d895ddbd8f8c)
  [#4065](https://github.com/npm/cli/issues/4065)
  @npmcli/arborist 4.0.5
  * fix: accurate filtering of workspaces `--no-workspaces`
  ([@fritzy](https://github.com/fritzy))

### DEPENDENCIES

* [`225645420`](https://github.com/npm/cli/commit/225645420cf3d13bc0b0d591f7f7bf21a9c24e47)
  [#3995](https://github.com/npm/cli/issues/3995)
  update to latest eslint and linting rules
  ([@wraithgar](https://github.com/wraithgar))
* [`203fedf5b`](https://github.com/npm/cli/commit/203fedf5b1eba78b76ebacbda88f215caabea6ca)
  [#4016](https://github.com/npm/cli/issues/4016)
  `eslint@8.0.0`: `@npmcli/eslint-config@2.0.0`
  * Update to eslint@8 and and `@npmcli/eslint-config@2.0.0`
  * Remove eslint-plugin-node.
  Also remove an unused script that was failing linting.  We don't use the
  update-dist-tags script anymore as part of our release process.
  ([@wraithgar](https://github.com/wraithgar))
* [`7b4aa59b6`](https://github.com/npm/cli/commit/7b4aa59b6630831f25d19c0c15a65acaf3a83327)
  `signal-exit@3.0.6`:, `tap@15.1.2`
  ([@isaacs](https://github.com/isaacs))
* [`08015859c`](https://github.com/npm/cli/commit/08015859ca0abe47845d2970212cd344cdfc56e6)
  [#4049](https://github.com/npm/cli/issues/4049)
  `npmlog@6.0.0`
* [`088c11694`](https://github.com/npm/cli/commit/088c11694a9f575e5c0fe10ab9efb55d14019be7)
  [#4045](https://github.com/npm/cli/issues/4045)
  `node-gyp@8.4.0`:
  * feat: support vs2022
  * feat: build with config.gypi from node headers

## v8.1.3 (2021-11-04)

### BUG FIXES

* [`8ffeb71df`](https://github.com/npm/cli/commit/8ffeb71dfb248b4a76744bd06cd4d6100f17c8ae)
  [#3959](https://github.com/npm/cli/issues/3959)
  fix: refactor commands
  ([@wraithgar](https://github.com/wraithgar))
* [`e5bfdaca4`](https://github.com/npm/cli/commit/e5bfdaca455e294109ba026f4d8b5cc80d3dfd20)
  [#3978](https://github.com/npm/cli/issues/3978)
  fix: shrinkwrap setting incorrect lockfileVersion
  ([@lukekarrys](https://github.com/lukekarrys))
* [`32ccd3c27`](https://github.com/npm/cli/commit/32ccd3c2767a14198a1803f04e747ef848f7c938)
  [#3988](https://github.com/npm/cli/issues/3988)
  fix: remove usage of unnecessary util.promisify
  ([@lukekarrys](https://github.com/lukekarrys))
* [`1e9c31c4e`](https://github.com/npm/cli/commit/1e9c31c4e3929483580a0a554d7515095b5418ca)
  [#3994](https://github.com/npm/cli/issues/3994)
  fix: npm help on windows
  ([@wraithgar](https://github.com/wraithgar))
* [`22230ef3d`](https://github.com/npm/cli/commit/22230ef3dd590def31c274b3412106b4cfbd212f)
  [#3987](https://github.com/npm/cli/issues/3987)
  fix: make prefixed usage errors more consistent
  ([@lukekarrys](https://github.com/lukekarrys))

### DEPENDENCIES

* [`ac2fabb86`](https://github.com/npm/cli/commit/ac2fabb8604db0dac852913d61c8415ae7464485)
  [#3990](https://github.com/npm/cli/issues/3990)
  `@npmcli/arborist@4.0.4`
  * fix: don't compare spec for local dep vs existing
  * fix: stop pruning peerSets when entryEdge is from a workspace
* [`a0d35ff20`](https://github.com/npm/cli/commit/a0d35ff20aed6aab8508123eb540bc9c61fb127d)
  [#3996](https://github.com/npm/cli/issues/3996)
  `@npmcli/config@2.3.1`:
  * fix: dont load project configs in global mode

## v8.1.2 (2021-10-28)

### BUG FIXES

* [`cb9f43551`](https://github.com/npm/cli/commit/cb9f43551f46bf27095cd7bd6c1885a441004cd2)
  [#3949](https://github.com/npm/cli/issues/3949)
  allow `--lockfile-version` config to be string and coerce to number ([@lukekarrys](https://github.com/lukekarrys))
* [`070901d7a`](https://github.com/npm/cli/commit/070901d7a6e3110a04ef41d8fcf14ffbfcce1496)
  [#3943](https://github.com/npm/cli/issues/3943)
  fix(publish): clean args before logging
  ([@wraithgar](https://github.com/wraithgar))

### DEPENDENCIES

* [`8af94726b`](https://github.com/npm/cli/commit/8af94726b098031c7c0cae7ed50cc4e2e3499181)
  [#3953](https://github.com/npm/cli/issues/3953)
  `arborist@4.0.3`
  * [`38cee94`](https://github.com/npm/arborist/commit/38cee94afa53d578830cc282348a803a8a6eefad)
    [#340](https://github.com/npm/arborist/pull/340)
    fix: set lockfileVersion from file during reset
  * [`d310bd3`](https://github.com/npm/arborist/commit/d310bd3290c3a81e8285ceeb6eda9c9b5aa867d7)
    [#339](https://github.com/npm/arborist/pull/339)
    fix: always set originalLockfileVersion when doing shrinkwrap reset

## v8.1.1 (2021-10-21)

### DEPENDENCIES

* [`51fb83ce9`](https://github.com/npm/cli/commit/51fb83ce93fdd7e289da7b2aabc95b0518f0aa31)
  [#3921](https://github.com/npm/cli/issues/3921)
  `@npmcli/arborist@4.0.2`:
  * fix: skip peer conflict check if there is a current node
* [`1d07f2187`](https://github.com/npm/cli/commit/1d07f21876994c6d4d69559203cfdac6022536b6)
  [#3913](https://github.com/npm/cli/issues/3913)
  `node-gyp@8.3.0`:
  * feat(gyp): update gyp to v0.10.0

## v8.1.0 (2021-10-14)

### FEATURES

* [`24273a862`](https://github.com/npm/cli/commit/24273a862e54abfd022df9fc4b8c250bfe77817c)
  [#3890](https://github.com/npm/cli/issues/3890)
  feat(workspaces): add --include-workspace-root and explicit --no-workspaces
  ([@fritzy](https://github.com/fritzy))
* [`d559d6da8`](https://github.com/npm/cli/commit/d559d6da84c2dae960c6b7c89c6012fb31bcfa37)
  [#3880](https://github.com/npm/cli/issues/3880)
  feat(config): Add --lockfile-version config option
  ([@isaacs](https://github.com/isaacs))

### DEPENDENCIES

* [`ae4bf013d`](https://github.com/npm/cli/commit/ae4bf013d06d84b8600937a28cc7b4c4034f571c)
  [#3883](https://github.com/npm/cli/issues/3883)
  `pacote@12.0.2`:
  * fix: preserve git+ssh url for non-hosted repos
  * deps: update `npm-packlist@3.0.0`
  * fix: no longer include ignored bundled link deps
* [`fbc5a3d08`](https://github.com/npm/cli/commit/fbc5a3d08231176b9d8a7b9dd3371fb40ba6abc9)
  [#3889](https://github.com/npm/cli/issues/3889)
  `@npmcli/ci-detect@1.4.0`
* [`b6bc279e5`](https://github.com/npm/cli/commit/b6bc279e55aa65afff09d9258f9df7168a7dbadb)
  `@npmcli/arborist@4.0.1`
* [`0f69d295b`](https://github.com/npm/cli/commit/0f69d295bd5516f496af75ef29e7ae6304fa2ba5)
  [#3893](https://github.com/npm/cli/issues/3893)
  `@npmcli/map-workspaces@2.0.0`

### DOCUMENTATION

* [`f77932ca1`](https://github.com/npm/cli/commit/f77932ca1eafbece16fc249a7470f760d652bd94)
  [#3861](https://github.com/npm/cli/issues/3861)
  fix(docs): Update Node support in README
  ([@gfyoung](https://github.com/gfyoung))
* [`a190f422a`](https://github.com/npm/cli/commit/a190f422a2587a0e56afa5032175e57e55123ea2)
  [#3878](https://github.com/npm/cli/issues/3878)
  fix(docs): grammar fix
  ([@XhmikosR](https://github.com/XhmikosR))

## v8.0.0 (2021-10-07)

The purpose of this release is to drop support for old node versions and
to remove support for `require('npm')`.  There are no other breaking
changes.

### BREAKING CHANGES

* Drop support for node 10 and 11
* Raise support ceiling in node 12 and 14 to LTS (^12.13.0/^14.15.0)
* Drop support to `require('npm')`
* Update subdependencies that also dropped node10 support

### DEPENDENCIES

* The following dependencies were updated to drop node10 support and
    update to the latest node-gyp
  * libnpmversion@2.0.1
  * pacote@12.0.0
  * libnpmpack@3.0.0
  * @npmcli/arborist@3.0.0
  * libnpmfund@2.0.0
  * libnpmexec@3.0.0
  * node-gyp@8.2.0
* [`8bd85cdae`](https://github.com/npm/cli/commit/8bd85cdae5eead60d5e92d6f1be27e88b480b1cb)
  [#3813](https://github.com/npm/cli/issues/3813)
  `cli-columns@4.0.0`
