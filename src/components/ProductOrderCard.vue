<template>
  <div class="row">
    <div class="col-4">
      <img
        src="https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNha2V8ZW58MHwwfDB8fHww"
        alt=""
        class="img-fluid object-fit-cover"
      />
    </div>
    <div class="col-8 d-flex justify-content-between align-items-center my-3 my-lg-0">
      <div class="d-flex justify-content-between flex-lg-column">
        <div class="mt-3">
          <h5>紅絲絨蛋糕</h5>
          <p class="mt-3 mt-lg-0">NT$90</p>
        </div>
      </div>
      <div class="input-group mb-3" style="max-width: 150px; max-height: 20px;">
          <button class="fs-4 btn btn-outline-secondary border-0" type="button">
            <i class="bi bi-dash-lg"></i>
          </button>
          <input
            type="number"
            class="form-control text-center rounded"
            placeholder="1"
            min="1"
          />
          <button class="fs-4 btn btn-outline-secondary border-0" type="button">
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>
      <div class="d-flex flex-column justify-content-center">
        <a href="#" class="link-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-trash mt-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
            />
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <hr/>
</template>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
