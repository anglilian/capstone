# Capstone 2022

The following project contains the code for two major case studies that form my senior Capstone project.

## Understanding Public Opinoin on Vernacular Education in Malaysia

The first project aimed to understand public opinion on vernacular education in Malaysia. Ultimately, the author scraped 2580 Malay language articles and 3235 English language articles on vernacular education in Malaysia from 2017-2020 and 2015-2020 respectively. The Excel workbooks contained the raw scraped data with each sheet filtered to remove articles which did not relate to the exploration of the topic to a final 125 and 188 articles for Malay and English respectively.

![image](https://user-images.githubusercontent.com/43257301/144937888-e03d36cb-606d-4b45-a3e0-e60d724063f6.png)

The webscraper for English articles works signficantly faster than the Malay one because it uses the GoogleNews and Newspaper3k library which, unfortunately, did not work well with the Malay articles. Therefore, those articles had to be scraped using Selenium and BeautifulSoup4 which was significantly slower.

The articles were analysed using sentiment analysis, emotion analysis and topic modelling. The Malay articles all relied on Husein Zolkepli's <a href="https://github.com/huseinzol05/Malaya">Malaya</a> library while the English articles used <a href="https://github.com/cjhutto/vaderSentiment">VADER</a>, <a href="https://shivamsharma26.github.io/text2emotion/">text2emotion</a> and <a href="https://github.com/MaartenGr/BERTopic">BERTopic</a> respectively. The results can be viewed within the Jupyter notebooks.

For a full analysis of the results and methods please refer to the <a href= "https://github.com/anglilian/capstone/blob/main/Understanding%20Public%20Opinion%20on%20Vernacular%20Education%20in%20Malaysia.pdf">paper</a>.

## May 13 Web Article

The second project is a web article providing historians' perspective on May 13, a racial riot in Malaysia after the 3rd General Elections in 1969. The web article serves as an example of what an effective public history work could be. You can view the website <a href="https://anglilian.github.io/capstone/website/">here</a>.
