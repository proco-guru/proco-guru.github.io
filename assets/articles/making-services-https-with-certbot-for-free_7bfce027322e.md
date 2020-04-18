
# Making services HTTPS with CertBot for free

##### Make certificates for your services and go live with HTTPS on JAVA, Node, Spring boot services

This article is following my previous article [Making website HTTPS with Certbot in a minute](/series/article/making-website-https-with-certbot-in-a-minute/e87b0b7280e). In case you missed that, you need to read and get basic certificates via Certbot to proceed with this.

**Prerequisites for this article**

1. Linux machine

1. Certbot installation

1. Already created certificates for Apache or *certonly*

![Photo by [NEW DATA SERVICES](https://unsplash.com/@new_data_services?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/services?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/9216/1*oLuorn4QKBnWWC5rSKRZxQ.jpeg)*Photo by [NEW DATA SERVICES](https://unsplash.com/@new_data_services?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/services?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

**Let’s begin**

Check if this directory have certificates created for your domain

    cd /etc/letsencrypt/archive/<yourdomain>
    root@myHost:/etc/letsencrypt/archive/yourdomain# ls -lrt
    total 64
    -rw------- 1 root root 1708 Apr 16 03:59 privkey1.pem
    -rw-r--r-- 1 root root 3558 Apr 16 03:59 fullchain1.pem
    -rw-r--r-- 1 root root 1647 Apr 16 03:59 chain1.pem
    -rw-r--r-- 1 root root 1911 Apr 16 03:59 cert1.pem
    -rw------- 1 root root 1704 May 26 06:43 privkey2.pem
    -rw-r--r-- 1 root root 3554 May 26 06:43 fullchain2.pem
    -rw-r--r-- 1 root root 1647 May 26 06:43 chain2.pem
    -rw-r--r-- 1 root root 1907 May 26 06:43 cert2.pem
    -rw------- 1 root root 1704 May 26 06:46 privkey3.pem
    -rw-r--r-- 1 root root 3591 May 26 06:46 fullchain3.pem
    -rw-r--r-- 1 root root 1647 May 26 06:46 chain3.pem
    -rw-r--r-- 1 root root 1944 May 26 06:46 cert3.pem
    **-rw------- 1 root root 1704 May 26 06:55 privkey4.pem
    -rw-r--r-- 1 root root 3586 May 26 06:55 fullchain4.pem
    -rw-r--r-- 1 root root 1647 May 26 06:55 chain4.pem
    -rw-r--r-- 1 root root 1939 May 26 06:55 cert4.pem**

Certbot gives certificates for 3 months only, so I have cronjob to update that before it expires (please ignore timestamps I created those for testing). Above, indicates that it was incrementally renewed from time to time.

So, we will take the latest version of all these files. Let's understand why? Because this is activated in your live folder in letsencrypt

    /etc/letsencrypt/live/yourdomain# ls -lrt
    total 4
    -rw-r--r-- 1 root root 692 Apr 16 03:59 README
    lrwxrwxrwx 1 root root  41 May 26 06:55 privkey.pem -> ../../archive/yourdomain/privkey4.pem
    lrwxrwxrwx 1 root root  43 May 26 06:55 fullchain.pem -> ../../archive/yourdomain/fullchain4.pem
    lrwxrwxrwx 1 root root  39 May 26 06:55 chain.pem -> ../../archive/yourdomain/chain4.pem
    lrwxrwxrwx 1 root root  38 May 26 06:55 cert.pem -> ../../archive/yourdomain/cert4.pem

Cool, so let's make a copy from archive to another folder, to keep it untouched and safe.

    **#copy steps**
    root@myHost:/home/yourdomain_stage/certbot# cp -r /etc/letsencrypt/archive/yourdomain/***4*** .
    # I am taking 4 because it was latest for me in archieve

**Spring boot usage**

Now let's create the p12 file for JAVA

    root@myHost:/home/yourdomain_stage/certbot# openssl pkcs12 -export -out new-serv.p12 -inkey privkey4.pem -in fullchain4.pem -name tomcat

**Spring boot service usage:**

Now download this p12 file and put in Spring boot service, update entry like this in properties

    **application.properties
    ----------------------**

    server.port: 8001
    
    #HTTPS properties
    server.ssl.key-store = classpath:**keyStore.p12**
    server.ssl.key-store-password = oceantree
    server.ssl.key-store-type = PKCS12
    ##server.ssl.key-alias = tomcat

And rest of it will be taken care of by spring boot autoconfigure package.

**Node JS/Express JS usage:**

    ## Server.js

    const privateKey = fs.readFileSync(__dirname + config.ssl.privateKey, 'utf8');
    const certificate = fs.readFileSync(__dirname + config.ssl.sslCertificate, 'utf8');
    const ca1 = fs.readFileSync(__dirname + config.ssl.ca1, 'utf8');
    const ca2 = fs.readFileSync(__dirname + config.ssl.ca2, 'utf8');
    const credentials = { key: privateKey, cert: certificate, ca: [ca1, ca2] };
    
    /* HTTPS end */
    const httpServer = http.createServer(app);
    const httpsServer = https.createServer(credentials, app);
    
    httpServer.listen(config.port, (a) => {
        logger.log(`HTTP | ${config.serverName} listening on port ${config.port}!`)
    });
    
    httpsServer.listen(config.sslPort, (a) => {
        logger.log(`HTTPS | ${config.serverName} listening on port ${config.sslPort}!`)
    });

I am using all these configs from config.json, if you wish you can see how it looks.

    {
        "serverName": "ssl-server",
        "port": 8441,
        "sslPort": 8443,
        "isDebugMode": true,
        "ssl": {
            "privateKey": "/config/ssl/mybuddypro.key",
            "sslCertificate": "/config/ssl/mybuddypro.crt",
            "ca1": "/config/ssl/chain1.pem",
            "ca2": "/config/ssl/fullchain1.pem"
        }
    }

I have downloaded all the files we copied at **#copy steps **to config/ssl folder

Start your servers and you are enabled SSL.

**Please note a few points when you testing this SSL mode**

1. When you run on local it may prompt invalid certificates as *you are* *using the certificates on localhost than yourdomain.com*

1. Your SSL will ONLY WORK on the domain for which it was created

1. You can reuse the certificate for multiple services

1. If you are hosting the services on sub-domain, you need to extend certificate from Certbot and repeat this procedure to enable certification on this domain. [You can find Certbot help here](https://certbot.eff.org/docs/using.html)

1. If you are having the multiple domain added to certificates, for all of them it should work

1. You can convert certificates to PPK, P12, PEM, JKS, etc. as these are just the interchangeable formats and composed on top of the private key and cert chains.
