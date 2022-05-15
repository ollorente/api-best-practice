class MaxCarousel extends HTMLElement {
  set carousel(carousel) {
    this.innerHTML = `
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://1.bp.blogspot.com/-pJIuLVQbu_I/URiDC5kjUbI/AAAAAAAAANg/YSXFxy7tMSU/s1600/mar28.jpg" class="d-block w-100" alt="Imagen">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://www.christiesrealestate.com/localimagereader.ashx?imageurl=siteresources%2Fsiteresources%2Fmy%20folder%2Fimages%2Farticles%2Fpicturesque-coastal-village-del-mar-california%2Fdel%20mar%20(2).jpg&imagecache=true" class="d-block w-100" alt="Imagen">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/900/ced33e42-64a8-45f4-971c-e7ddd82ba34e.jpg" class="d-block w-100" alt="Imagen">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `;
  }
}

customElements.define("max-carousel", MaxCarousel);
