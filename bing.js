---
layout: null
---
const request = require('request-promise');

module.exports = async () => {
  const data = {
    siteUrl: '{{ site.url }}',
    urlList: [{% for post in site.posts %}{% if post.modify_day == site.modify_time %}'{{ site.url }}{{ post.url }}', {% endif %}{% endfor %}]
  };

  try {
    const res = await request({
      url: `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey={{ site.bing.APIkey }}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      json: data
    });

    console.log(`🎉bing response : ${JSON.stringify(res)}`);
  } catch (error) {
    console.log(`❌bing error : ${JSON.stringify(error)}`);
  }
};