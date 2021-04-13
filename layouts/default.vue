<template>
  <div id="main">
    <header>
      <CommonNavbar />
    </header>
    <article>
      <Nuxt />
    </article>
    <footer>
      <CommonJDFooter />
    </footer>
  </div>
</template>

<style>

.ant-drawer-body{
  padding: 24px 0 24px 24px;
}
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
header{
  position:fixed;
  top:0;
  width: 100%;
  background-color: white;
  padding: 20px;
  height: 1.6rem;
  z-index: 9;
  border-bottom:#F5F5F5 1px solid;
}
footer{
  background-color: #1E222D ;
  padding: 0.5rem;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
article{
  margin-top: 1.6rem;
  max-width:800px;
  z-index: -1;
}
.ant-drawer {
  margin-top: 1.6rem;
  height: calc(100%-1.6rem);
}
.ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper{
  box-shadow: none;
}
.ant-collapse-content .ant-collapse-content-active{
  border-bottom:#F5F5F5 1px solid ;
}
</style>
