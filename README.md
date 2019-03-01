# webhooks-serve


- [ ] Сделать Systemd service 
- [ ] Как проще всего установить такой сервис
  - [ ] Можно попробовать собрать пакет [Creating Debian/Ubuntu .deb packages](http://www.king-foo.com/2011/11/creating-debianubuntu-deb-packages/)
    - https://www.debian.org/doc/debian-policy/ch-controlfields.html#binary-package-control-files-debian-control
  - [ ] Либо написать роль для ansible (но тогда если кто-то захочет просто установить эту штуку, то нужно будет ansible)
  - [ ] 
- [ ] [How to Use Node.js and Github Webhooks to Keep Remote Projects in Sync](https://www.digitalocean.com/community/tutorials/how-to-use-node-js-and-github-webhooks-to-keep-remote-projects-in-sync)
- [ ] Использовать [@octokit/webhooks](https://github.com/octokit/webhooks.js/)
- [ ] [Deploy node on Linux](https://github.com/certsimple/deploy-node-on-linux)
- [ ] Подумать над [post-receive.sh](https://gist.github.com/zanematthew/4597331)
  или может достаточно через husky добавить хуки в проект

## Installing

Идеальный план деплоя проекта

```bash
# ➜  ~ su git
# git@dafisha:/root$
cd /var/www
git clone --bare https://github.com/extg/webhooks-serve
# Cloning into bare repository 'webhooks-serve.git'...
```

## Start

```sh
node lib/index.js
```

## Dev

```sh
yarn start
```

### Config

```json
{
  "name": "My project",
  "version": "0.1.0",
  "webhooks-serve": {
    "hooks": {
      "pre-commit": [
        "./scripts/build.bash"
      ]
    },
    "recoverOnFail": true
  }
}
```

`recoverOnFail` - Перед выполнением хука текущее состояние проекта сохраняется в zip,
и если команды хука выполнились с ошибкой, то возвращается прежнее состояние
