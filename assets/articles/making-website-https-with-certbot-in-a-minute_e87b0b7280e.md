<!-- title::: Proco | Making website HTTPS with Certbot in a minute -->
<!-- description::: SSL is becoming a mandate and we will get it ready for your domain in a minute -->
<!-- image::: https://proco.guru/assets/articles/making-website-https-with-certbot-in-a-minute_e87b0b7280e.jpeg -->
<!-- url::: https://proco.guru/series/articles/making-website-https-with-certbot-in-a-minute_e87b0b7280e -->
<!-- keywords::: Certbot, Website SSL, ProCo -->

# Making website HTTPS with Certbot in a minute

##### SSL is becoming a mandate and we will get it ready for your domain in a minute

![Image from unsplash](https://cdn-images-1.medium.com/max/10944/1*8yz3hkO3ynHV2qYGARynJg.jpeg)*Image from unsplash*

There are many vendors (paid and free) but it’s always tough to install it manually. Let's make it happen just with a bot, yes Certbot.

Make sure you have a Linux machine to run this.

Let's start and fetch the Certbot from web and setup that quickly. I have created a script for this.

    wget -O — [https://raw.githubusercontent.com/erBhushanPawar/rocking-shell/master/certbot-installer.sh](https://raw.githubusercontent.com/erBhushanPawar/rocking-shell/master/certbot-installer.sh)

This script will setup required things on your machine as per Certbot documentations, [more details here](https://certbot.eff.org/docs/install.html)

Now let's run this script

    sudo sh certbot-installer.sh yourdomain.com

Sudo is required because this script installs as root, you can also run using **sudo su **by making yourself root, but that can be dangerous.

This will ask a few questions to you like email just answer them.

This should identify the installed HTTP server on your Linux server like Apache or nginx and will ask you whether you need to redirect or not. I would prefer **auto redirect to HTTPS** this will upgrade the traffic from HTTP to HTTPS for your domain.

Happy SSL!
