<!-- title::: Proco | Setup SSMTP on Ubuntu servers with crontab -->
<!-- subHeader::: Learn how to set up the standalone job on Linux using Crontab and SSMTP to sent status out to you -->
<!-- image::: https://unsplash.com/@muukii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText -->
<!-- url::: https://proco.guru/series/articles/setup-ssmtp-on-ubuntu-servers-with-crontab_9f7326d1e002 -->
<!-- keywords::: Email servers, How to setup email host, SSMTP, Crontab, Proco -->

# Setup SSMTP on Ubuntu servers with crontab

Learn how to set up the standalone job on Linux using Crontab and SSMTP to sent status out to you

![Photo by [Muukii](https://unsplash.com/@muukii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/emails?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/11014/1*bzRsnzakR7O4RMbDfEZ1sA.jpeg)*Photo by [Muukii](https://unsplash.com/@muukii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/emails?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

First of all, you need a Linux machine to make this happen! On most of Linux distros crontab is available by default, specifically on servers. But anyway we will start this tutorial from scratch assuming you don’t even have crontab available.

### Installing Crontab

    apt-get update && apt-get upgrade

### Install cron

    apt-get install cron
    systemctl status cron
    ● cron.service - Regular background program processing daemon
       Loaded: loaded (/lib/systemd/system/cron.service; enabled; vendor preset: enabled)
       Active: active (running) since Tue 2019-07-02 20:38:53 IST; 4 days ago
         Docs: man:cron(8)
     Main PID: 978 (cron)
        Tasks: 1 (limit: 4915)
       Memory: 2.0M
       CGroup: /system.slice/cron.service
               └─978 /usr/sbin/cron -f

this shows your crontab is working fine.

Now lets try editing the crontab, use **root **if you need any **sudo** to be used in your script. Depending on your need you can use **crontab -e **for different users on system and every user have its own crontab installed.

    crontab -e
    (choose nano or any other editor of your choice, if asked)

    Adding below contents at the end of the file
    [MAILTO=yourmail@gmail.com](mailto:MAILTO=mybuddypro@gmail.com)
    * */12 * * * bash /home/rocking-shell/mongo-rolling-backup.sh

Save above file, and crontab will say, *installing crontab*

This means your crontab is setup now, [more details here](https://www.rosehosting.com/blog/ubuntu-crontab/)

### Installing SSMTP

    apt install ssmtp

Now edit ssmtp configurations here

**sudo vi /etc/ssmtp/ssmtp.conf**

    # Config file for sSMTP sendmail
    #
    # The person who gets all mail for userids < 1000
    # Make this empty to disable rewriting.
    [root=defaultEmail@gmail.com](mailto:root=er.mr.bhushan@gmail.com)

    # The place where the mail goes. The actual machine name is required no
    # MX records are consulted. Commonly mailhosts are named mail.domain.com
    mailhub=smtp.gmail.com:587
    [AuthUser=youremail@gmail.com](mailto:AuthUser=er.mr.bhushan@gmail.com)
    AuthPass=yourpassword
    UseSTARTTLS=yes

    # Where will the mail seem to come from?
    #rewriteDomain=

    # The full hostname
    #hostname=bhushan-HP-Notebook

    # Are users allowed to set their own From: address?
    # YES - Allow the user to specify their own From: address
    # NO - Use the system generated From: address
    FromLineOverride=NO
    

Make sure when you use Gmail, you need to enable less secure apps in settings, [you can check this here](https://support.google.com/cloudidentity/answer/6260879?hl=en)

Lets try testing the ssmtp by sending an email

    nano mail-sample.txt

    enter below contents to it

    To: recipient_email@mydomain.com 
    From: youremail@gmail.com 
    Subject: test email from ssmtp!

    now run ssmtp

    **ssmtp to_email@gmail.com < mail-sample.txt**

You can find mongoDB rolling backup script here on my Github account which is added to crontab and this will start taking rolling backups
[**erBhushanPawar/rocking-shell**
*Contribute to erBhushanPawar/rocking-shell development by creating an account on GitHub.*github.com](https://github.com/erBhushanPawar/rocking-shell)

Yaayy! You are done. Please let me know in comments if you face any issues or need any help.
