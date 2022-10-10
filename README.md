# testimportmetaenv

Dummy project for https://github.com/iendeavor/import-meta-env/issues/15

```
cd testimportmetaenv
yarn
yarn build
```

## Expected bahaviour

The project builds

## Actual behavior

```
error during build:
Error: Identifier 'import_meta_env_unique_id_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' has already been declared (Note that you need plugins to import files that are not JavaScript)
    at error (file:///C:/testimportmetaenv/node_modules/rollup/dist/es/shared/rollup.js:1858:30)
    at Module.error (file:///C:/testimportmetaenv/node_modules/rollup/dist/es/shared/rollup.js:12429:16)
    at Module.tryParse (file:///C:/testimportmetaenv/node_modules/rollup/dist/es/shared/rollup.js:12806:25)
    at Module.setSource (file:///C:/testimportmetaenv/node_modules/rollup/dist/es/shared/rollup.js:12711:24)
    at ModuleLoader.addModuleSource (file:///C:/testimportmetaenv/node_modules/rollup/dist/es/shared/rollup.js:22153:20)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
```

### Findings

It seems that when importing the TheSidebar.vue file in App.vue, the build fails.

Removing all references to the `q-*` (Quasar) components from the template section, does NOT solve the issue.
