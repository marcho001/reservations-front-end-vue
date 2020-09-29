export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    },
    unknownPerson (src) {
      return src || 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
    }
  }
}
