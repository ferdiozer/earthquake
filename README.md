# Türkiye Deprem Api
Türkiye'de gerçekleşen son 500 deprem bilgisinin Kandilli Rasathanesi'nin internet sitesinden çekilerek oluşturulmuş rest api servisidir. Veriler json formatında çıktı olarak alınabilir ve üzerlerinde filtreleme işlemleri uygulanabilir. <br/>

> **WEB:** https://deprem.piyanos.com

Uuygulama özellikleri<br/>
API:<br/>
-JSON veri yapısı
-Node Js
-Apiyi uygulamalarınızda istediğiniz gibi kullanabilirsiniz.
WEB:<br/>
-React Js
-Google Map
-Animasyon
-Uygulamalarınıza kolayca entegre edilebilir

> **API :** https://deprem.piyanos.com/api

## Api Kullanım
|   Başlık     | Açıklama   |
| ------------- |:-------------:|
| /api      |(Endpoint) Türkiye'de gerçekleşen deprem bilgisini getirir. |
| date| (Query), date değeri gönderildiğinde o tarihteki verileri getirir   | 
| startDate | (Query) Belirlenen tarihteki ve ondan sonraki bütün kayıtları getir  |
| endDate |(Query) Belirlenen tarihteki ve ondan önceki bütün kayıtları getir  |

## Uygulama Görüntüsü (React js)
![Resim](https://raw.githubusercontent.com/ferdiozer/earthquake/main/deprem.jpg) <br/>
![Resim](https://raw.githubusercontent.com/ferdiozer/earthquake/main/deprem_mobil.png) <br/>


## Local Bilgisayarda Kurulum
Bilgisayarınızda node js yüklü değilde yükleyiniz<br/>
1-) Depoyu Yerel Bilgisayarınıza İndirin. 
> **ADIM-1 :** 
```git clone https://github.com/ferdiozer/earthquake```

2-) Bağımlılıklarını Kurun
> **ADIM-2 :** api ve web için ayrı ayrı yapınız
```npm install```

3-) Son API (Server)
```npm start```
> **ADIM-3 :**  --> Proje http://localhost:3070/api

3-) Son WEB (Client)
```npm start```
> **ADIM-3.1 :**  --> Proje http://localhost:3000

## Veri Kaynağı
Veriler BOĞAZİÇİ ÜNİVERSİTESİ KANDİLLİ RASATHANESİ VE DEPREM ARAŞTIRMA ENSTİTÜSÜ internet sitesi üzerinden sağlanmaktadır. <br />
Web siteye gitmek için : http://www.koeri.boun.edu.tr/scripts/lst0.asp

## Lisans
MIT License
<br/>
> **MIT :** https://github.com/ferdiozer/earthquake/blob/main/LICENSE

## Geliştiriciler
Ferdi Özer
<br/>
> **GITHUB :** https://github.com/ferdiozer

## Destekleyenler
NKU (Namık Kemal Üniversitesi - Çorlu Mühendislik Fakültesi)
<br/>
Piyanos Software
<br/>
> **WEB SITE :** https://piyanos.com
<br/>

Sorularınız için : https://github.com/ferdiozer/earthquake/issues

