# repo-to-pdf

[![npm](https://img.shields.io/npm/v/repo-to-pdf.svg?label=&logo=npm)](https://www.npmjs.com/package/repo-to-pdf)
[![npm](https://img.shields.io/npm/dm/repo-to-pdf.svg?label=dl)](https://www.npmjs.com/package/repo-to-pdf)

Make pdf from source code

Here is a [sample](https://github.com/josherich/repo-to-pdf/blob/master/sample.pdf)

## Install

```bash
npm install repo-to-pdf
```

## Usage

### Basic

```bash
npx repo-to-pdf [src/folder]
```

### All options

```bash
-d, --device [platform]
device [desktop(default)|mobile|tablet]
# npx repo-to-pdf ../repo -d mobile

-t, --title [name]
pdf filename
# npx repo-to-pdf ../repo -t MeinKampf.pdf

-w, --whitelist [wlist]
file format white list, split by ","
# npx repo-to-pdf ../repo -w js,md

-s, --size [size]
pdf file size limit, in MB, default 10 MB
# npx repo-to-pdf ../repo -s 10

-r, --renderer [node|calibre|wkhtmltopdf]
use either node(relaxedjs) or calibre to render ebook, node outputs pdf, calibre outputs pdf, mobi, epub
# npx repo-to-pdf ../repo -r calibre

-f, --format [pdf|mobi|epub]
output format, either pdf, mobi, epub. mobi and epub are generated using calibre ebook-convert
# npx repo-to-pdf ../repo -f mobi

-c, --calibre [path]
path to ebook-convert, for MacOS, try /Applications/calibre.app/Contents/MacOS/ebook-convert; for linux, try /usr/bin/ebook-convert
```

##### For tablet, mobile
only supported by the renderer node
```bash
npx repo-to-pdf [src/folder] --device tablet
npx repo-to-pdf [src/folder] --device mobile
```

### Testing

```bash
npm run test
```

### Performance
on M1 Macbook Air
```bash
time npx repo-to-pdf ./test/data/redis-7.0.0/src -s 3
2.09s user 0.36s system 2% cpu 1:42.14 total

time npx repo-to-pdf ./test/data/redis-7.0.0/src -s 3 -r wkhtmltopdf
43.78s user 0.84s system 93% cpu 47.787 total
```

### Known issues
- The renderer `wkhtmltopdf` can split lines. It's a known unsolved issue of `wkhtmltopdf`: https://github.com/wkhtmltopdf/wkhtmltopdf/issues/2141, https://github.com/wkhtmltopdf/wkhtmltopdf/issues/1524
- To properly install puppeteer on Debian, you might need to install required libs: https://github.com/puppeteer/puppeteer/issues/290#issuecomment-322921352 and `libgbm-dev`