: npm i -g typescript ts-node ts-node-dev
create file config ts : tsc --init
config tsconfig.json : allowjs => ทำให้ compiler js, rootDir => ระบุ folder ที่ต้องการให้เริ่มต้น compiler ที่ไหน, outDir => folder ที่เก็บ js ที่ผ่านการ compiler

-npm init -y
-npm i express
-npm i @types/express --dev

# express types
https://javascript.plainenglish.io/typed-express-request-and-response-with-typescript-7277aea028c


#=================#
#docket

- docker run -d --name <container-name> -v c:/ : /var/lib/mysql -p port:port-docker images
- docker exec -it <container-id> sh or bash
- CREATE USER 'admin'@'%' IDENTIFIED BY 'password'; OR alter usre 'root'@'%' IDENTIFIED BY 'password';
- GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
- flush privileges;

*fix auth plugin caching_sha2_passsword 
- select user,host,plugin from mysql.user;
- alter user 'admin'@'%' identified with mysql_native_password by 'password';