# node.js ssl

## OpenSSL - self sign cert (1 step)

```
openssl req -x509 -newkey rsa:4096 -nodes -sha256 -subj '/CN=localhost' -keyout localhost-private.pem -out localhost-cert.pem
```

## OpenSSL - self sign cert (3 steps)

```
openssl genrsa -out localhost-private.pem

openssl req -new -key localhost-private.pem -out csr.pem

openssl x509 -req -days 365 -in csr.pem -signkey localhost-private.pem -out localhost-cert.pem

```

## Lets Encrypt cert bot

```
sudo certbot certonly --standalone
```

#### Note for error "Can't open Z:/extlib/\_openssl111\_\_/ssl/openssl.cnf for reading" use the following command

```
set OPENSSL_CONF=C:\Program Files\OpenSSL-Win64\bin\openssl.cfg
```

#### Note to enable invalid certificate (chrome)

go to chrome://flags/ then enable "Allow invalid certificates for resources
loaded from localhost"
