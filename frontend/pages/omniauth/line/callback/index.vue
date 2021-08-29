<script>
export default {
  middleware: ['serverRedirect'],
  asyncData({ redirect }) {
    const isHelper = localStorage.getItem('is_helper')
    if (isHelper !== null) {
      return isHelper === 'true' ? redirect('/helper') : redirect('/hitokoe')
    }
  }
}
</script>
