<template>
  <footer id="footer" role="contentinfo">
    <a href="mailto:wolves941110@gmail.com" class="footer"> wolves941110@gmail.com </a>
  </footer>
</template>
<style lang="scss">
footer {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black300);
    // background-color: var(--black200);
    .footer {
      transition: all 0.5s;
      &:hover {
        color: var(--yellow);
      }
    }
}
</style>
