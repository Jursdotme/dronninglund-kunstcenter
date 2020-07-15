import Vue from 'vue'

const months = [
  'Januar',
  'Februar',
  'Mart',
  'April',
  'Maj',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'December',
]

const dateFilter = (value) => formatDate(value)

function formatDate(inputDate) {
  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const formattedDate = `${day}. ${months[month]} ${year}`
  return formattedDate
}

Vue.filter('date', dateFilter)
