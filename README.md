# sample-web-server
テクノロジー（藤原）Node.jsによるサンプルWebサーバ

```
Last login: Thu Jun 13 18:29:35 on ttys001
(base) MacBook-Pro:php-form kouki$ code .
(base) MacBook-Pro:php-form kouki$  cd ~/fujiwara
(base) MacBook-Pro:fujiwara kouki$ git clone git@github.com:nerufy/sample-web-server.git
Cloning into 'sample-web-server'...
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 7 (delta 1), reused 5 (delta 1), pack-reused 0
Receiving objects: 100% (7/7), done.
Resolving deltas: 100% (1/1), done.
(base) MacBook-Pro:fujiwara kouki$ cd sample-web-server/
(base) MacBook-Pro:sample-web-server kouki$ code .
(base) MacBook-Pro:sample-web-server kouki$ curl --silent --request GET --url https://api.thecatapi.com/v1/images/search
[{"breeds":[],"categories":[{"id":6,"name":"caturday"}],"id":"MTU2MjA1OA","url":"https://cdn2.thecatapi.com/images/MTU2MjA1Ocurl --silent --request GET --url https://api.thecatapi.com/v1/images/search
[{"breeds":[],"id":"e7r","url":"https://cdn2.thecatapi.com/images/e7r.jpg","width":400,"height":378}](base) MacBook-Pro:samplurl --silent --request GET --url https://api.thecatapi.com/v1/images/search
[{"breeds":[],"id":"5co","url":"https://cdn2.thecatapi.com/images/5co.jpg","width":500,"height":375}](base) MacBook-Pro:sample-web-server kouki$ curl --silent -tps://api.thecatapi.com/v1/images/search?limit=3
[{"breeds":[],"id":"3p0","url":"https://cdn2.thecatapi.com/images/3p0.gif","width":250,"height":170},{"breeds":[],"id":"a0n","url":"https://cdn2.thecatapi.com/images/a0n.jpg","width":530,"height":709},{"breeds":[],"id":"b8d","url":"https://cdn2.thecatapi.com/images/b8d.jpg","width":500,"height":375}](base) MacBook-Pro:sample-web-server kouki$ brew install jq
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> New Formulae
drone-cli                  scala@2.12                 swig@3
==> Updated Formulae
openssl ✔                  go                         paket
anyenv                     godep                      pandoc
aravis                     goofys                     phpmyadmin
armadillo                  grakn                      phpunit
atlantis                   graph-tool                 procs
aws-sdk-cpp                gst-plugins-good           pulumi
bitrise                    helmfile                   pybind11
braid                      hlint                      pyenv
buildifier                 imagemagick                rbspy
calicoctl                  imagemagick@6              scala
certbot                    jdupes                     scalariform
cfn-lint                   jenkins                    scons
chakra                     jenkins-lts                scrcpy
circleci                   jfrog-cli-go               serverless
citus                      jhipster                   ship
cointop                    joplin                     sops
composer                   knot                       sphinx-doc
dependency-check           libev                      telegraf
doctl                      librealsense               terraform
encfs                      libsigc++                  terragrunt
envconsul                  libtorrent-rasterbar       tokei
exiftool                   lmod                       tomcat
firebase-cli               macvim                     topgrade
flow                       mesa                       vultr
fluxctl                    mighttpd2                  webpack
folly                      minio                      whois
gibo                       minio-mc                   wildfly-as
glib                       node-build                 wtf
glooctl                    nomad                      yelp-tools
gmic                       opa                        you-get
==> Deleted Formulae
scala@2.10                               swig@3.04

==> Installing dependencies for jq: oniguruma
==> Installing jq dependency: oniguruma
==> Downloading https://homebrew.bintray.com/bottles/oniguruma-6.9.2.mojave.bott
==> Downloading from https://akamai.bintray.com/c6/c613befafe81da48913ebd1a7eb03
######################################################################## 100.0%
==> Pouring oniguruma-6.9.2.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/oniguruma/6.9.2: 17 files, 1.3MB
==> Installing jq
==> Downloading https://homebrew.bintray.com/bottles/jq-1.6.mojave.bottle.1.tar.
==> Downloading from https://akamai.bintray.com/71/71f0e76c5b22e5088426c971d5e79
######################################################################## 100.0%
==> Pouring jq-1.6.mojave.bottle.1.tar.gz
🍺  /usr/local/Cellar/jq/1.6: 18 files, 1MB
(base) MacBook-Pro:sample-web-server kouki$ curl --silent --request GET --url https://api.thecatapi.com/v1/images/search?limit=3 | jq
[
  {
    "breeds": [],
    "id": "54i",
    "url": "https://cdn2.thecatapi.com/images/54i.jpg",
    "width": 500,
    "height": 667
  },
  {
    "breeds": [],
    "id": "5bv",
    "url": "https://cdn2.thecatapi.com/images/5bv.jpg",
    "width": 500,
    "height": 375
  },
  {
    "breeds": [],
    "id": "ce3",
    "url": "https://cdn2.thecatapi.com/images/ce3.jpg",
    "width": 612,
    "height": 612
  }
]
(base) MacBook-Pro:sample-web-server kouki$ curl --silent --request GET --url 'https://api.thecatapi.com/v1/images/search?limit=3' > thecat.json
(base) MacBook-Pro:sample-web-server kouki$ ls
README.md	thecat.json
(base) MacBook-Pro:sample-web-server kouki$ mkdir mywebapi
(base) MacBook-Pro:sample-web-server kouki$ cd mywebapi
(base) MacBook-Pro:mywebapi kouki$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (mywebapi) npm install --save express
Sorry, name can only contain URL-friendly characters.
package name: (mywebapi) q
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/kouki/Documents/fujiwara/sample-web-server/mywebapi/package.json:

{
  "name": "q",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) n
Aborted.


(base) MacBook-Pro:mywebapi kouki$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (mywebapi) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/kouki/Documents/fujiwara/sample-web-server/mywebapi/package.json:

{
  "name": "mywebapi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) y
(base) MacBook-Pro:mywebapi kouki$ npm install --save express
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN mywebapi@1.0.0 No description
npm WARN mywebapi@1.0.0 No repository field.

+ express@4.17.1
added 50 packages from 37 contributors and audited 126 packages in 5.998s
found 0 vulnerabilities

(base) MacBook-Pro:mywebapi kouki$ vi index.js
(base) MacBook-Pro:mywebapi kouki$ node index.js
Listening on port 3000
^C
(base) MacBook-Pro:mywebapi kouki$ code index.js
(base) MacBook-Pro:mywebapi kouki$ node index.js
Listening on port 3000
^C
(base) MacBook-Pro:mywebapi kouki$ ls
index.js		package-lock.json
node_modules		package.json
(base) MacBook-Pro:mywebapi kouki$ mkdir web
(base) MacBook-Pro:mywebapi kouki$ ls
index.js		package-lock.json	web
node_modules		package.json
(base) MacBook-Pro:mywebapi kouki$ code .web
(base) MacBook-Pro:mywebapi kouki$ 
(base) MacBook-Pro:mywebapi kouki$ node index.js
Listening on port 3000
^C
(base) MacBook-Pro:mywebapi kouki$ node index.js
Listening on port 3000
^C
(base) MacBook-Pro:mywebapi kouki$ node index.js
Listening on port 3000
^C
(base) MacBook-Pro:mywebapi kouki$ node index.js
Listening on port 3000
^C
(base) MacBook-Pro:mywebapi kouki$ node index.js
Listening on port 3000
^C
(base) MacBook-Pro:mywebapi kouki$ 

```
自分が重要だと思った部分の追記
```
(base) MacBook-Pro:mywebapi kouki$ curl --silent --request GET --url http://localhost:3000
<!DOCTYPE html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>TODOリスト</title>
    <style>
        html {
            background-color: rgb(240,240,240);
        }
    </style>
</head>
<body>
    <h1>TODO List</h1>
    <div>
        <ul id="todo-container"></ul>
    </div>
    <script>
        fetch('./api/v1/list')
            .then((response) => response.json())
            .then((todoList) => {
                const todoContainer = document.querySelector('#todo-container')
                todoContainer.innerHTML = '';
                for(const item of todoList){
                    const li = document.createElement('li');
                    const label = document.createElement('label');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = item.done;
                    const text = new Text(item.title);
                    label.appendChild(checkbox);
                    label.appendChild(text);
                    li.appendChild(label);
                    todoContainer.appendChild(li);
                }
            })

    </script>
</body>(base) MacBook-Pro:mywebapi kouki$ curl --silent --request GET --url httplhost:3000/api/v1/list
[{"title":"Javascriptを勉強する","done":true},{"title":"Node.jsを勉強する","done":false},{"title":"Web APIを作る","done":false}](base) MacBook-Pro:mywebapi kouki$ 

```
