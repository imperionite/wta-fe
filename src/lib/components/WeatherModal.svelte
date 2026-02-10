<script>
  import { createEventDispatcher } from "svelte";

  export let weather = [];

  const dispatch = createEventDispatcher();
</script>

<div class="modal-backdrop show"></div>

<div class="modal show d-block" role="dialog" aria-modal="true">
  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">🌦 Detailed Weather Forecast</h5>
        <button
          class="btn-close"
          aria-label="Close"
          on:click={() => dispatch("close")}
        />
      </div>

      <div class="modal-body">
        <div class="row">
          {#each weather as day}
            <div class="col-md-4 col-sm-6 mb-4">
              <div class="border rounded p-3 h-100 text-center">
                <h6 class="fw-bold">{day.date}</h6>

                {#if day.icon}
                  <img src={day.icon} alt={day.condition} width="50" />
                {/if}

                <p class="mb-1">{day.condition}</p>

                <small class="d-block">
                  🌡 {day.minTemp}°C – {day.maxTemp}°C
                </small>

                <hr />

                <small class="d-block">🌧 Rain: {day.chanceOfRain}%</small>
                <small class="d-block">💧 Humidity: {day.humidity}%</small>
                <small class="d-block">💨 Wind: {day.windSpeed} km/h</small>
                <small class="d-block">🔆 UV Index: {day.uvIndex}</small>

                <hr />

                <small class="d-block">🌅 Sunrise: {day.sunrise}</small>
                <small class="d-block">🌇 Sunset: {day.sunset}</small>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" on:click={() => dispatch("close")}>
          Close
        </button>
      </div>
    </div>
  </div>
</div>
