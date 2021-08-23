<script>
export default {
  middleware: ['serverRedirect'],
  asyncData({ redirect }) {
    redirect(301, '/hitokoe')
  }
}
</script>
