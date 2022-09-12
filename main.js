
const Format1 = document.querySelector('.format-1')
const Format2 = document.querySelector('.format-2')
const Format3 = document.querySelector('.format-3')
const Format4 = document.querySelector('.format-4')
const Format5 = document.querySelector('.format-5')








Format1.innerHTML = new Intl.NumberFormat().format(601900)
Format2.innerHTML = new Intl.NumberFormat('en-US', {
  style: 'percent',
}).format(3500)

Format3.innerHTML = new Intl.NumberFormat('zh-TW', {
  notation: "compact"
}).format(7384927193)

Format4.innerHTML = new Intl.NumberFormat('en', {
  maximumFractionDigits: 1,
}).format(4.67567)
Format5.innerHTML = new Intl.NumberFormat('zh-TW', {
  notation: 'compact',
  style: 'currency',
  currency: 'TWD'
}).format(846284765)