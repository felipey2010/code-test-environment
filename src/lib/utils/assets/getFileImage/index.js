import blank from 'assets/images/files/blank.png'
import _3ds from 'assets/images/files/3ds.png'
import ai from 'assets/images/files/ai.png'
import avi from 'assets/images/files/avi.png'
import aac from 'assets/images/files/aac.png'
import bmp from 'assets/images/files/bmp.png'
import cad from 'assets/images/files/cad.png'
import cdr from 'assets/images/files/cdr.png'
import css from 'assets/images/files/css.png'
import dat from 'assets/images/files/dat.png'
import dll from 'assets/images/files/dll.png'
import dmg from 'assets/images/files/dmg.png'
import doc from 'assets/images/files/doc.png'
import eps from 'assets/images/files/eps.png'
import fla from 'assets/images/files/fla.png'
import flv from 'assets/images/files/flv.png'
import gif from 'assets/images/files/gif.png'
import html from 'assets/images/files/html.png'
import indd from 'assets/images/files/indd.png'
import iso from 'assets/images/files/iso.png'
import jpg from 'assets/images/files/jpg.png'
import js from 'assets/images/files/js.png'
import midi from 'assets/images/files/midi.png'
import mov from 'assets/images/files/mov.png'
import mp3 from 'assets/images/files/mp3.png'
import mpg from 'assets/images/files/mpg.png'
import pdf from 'assets/images/files/pdf.png'
import php from 'assets/images/files/php.png'
import png from 'assets/images/files/png.png'
import ppt from 'assets/images/files/ppt.png'
import ps from 'assets/images/files/ps.png'
import psd from 'assets/images/files/psd.png'
import raw from 'assets/images/files/raw.png'
import sql from 'assets/images/files/sql.png'
import svg from 'assets/images/files/svg.png'
import tif from 'assets/images/files/tif.png'
import txt from 'assets/images/files/txt.png'
import wmv from 'assets/images/files/wmv.png'
import xls from 'assets/images/files/xls.png'
import xlsx from 'assets/images/files/xlsx.png'
import xml from 'assets/images/files/xml.png'
import zip from 'assets/images/files/zip.png'

const images = {
  '3ds': _3ds.src,
  ai: ai.src,
  avi: avi.src,
  aac: aac.src,
  bmp: bmp.src,
  cad: cad.src,
  cdr: cdr.src,
  css: css.src,
  dat: dat.src,
  dll: dll.src,
  dmg: dmg.src,
  doc: doc.src,
  eps: eps.src,
  fla: fla.src,
  flv: flv.src,
  gif: gif.src,
  html: html.src,
  indd: indd.src,
  iso: iso.src,
  jpg: jpg.src,
  js: js.src,
  midi: midi.src,
  mov: mov.src,
  mp3: mp3.src,
  mpg: mpg.src,
  pdf: pdf.src,
  php: php.src,
  png: png.src,
  ppt: ppt.src,
  ps: ps.src,
  psd: psd.src,
  raw: raw.src,
  sql: sql.src,
  svg: svg.src,
  tif: tif.src,
  txt: txt.src,
  wmv: wmv.src,
  xls: xls.src,
  xlsx: xlsx.src,
  xml: xml,
  zip: zip.src
}

export default function getFileImage(extension) {
  return images[extension.toLowerCase()] || blank.src
}
