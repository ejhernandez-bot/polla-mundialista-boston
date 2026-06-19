const API_URL = "https://script.googleusercontent.com/a/macros/bostonmedical.com.co/echo?user_content_key=AUkAhnS9xykzxlcMyigPERkazk-UTQv_OHrAOVadGRXZRWsSqyHII8DG0V43jE6y_SNmB_cykslz4-qovfPMKWQ0bv0jrqslnS_7c6EmaF-KNEjRxEpMykw8_MGMxKckKLmLs72ajDvETlQlw9Hh12QmQDzdt2AoCah7yfgp1Rr9Quznk10tOLRebJ0ExwYrTE8oI5N9O3uZWrkqvHzjQ72lfxBWNx76bETPDPeNitrsjlxAPMsaQEq4KEYMTqIfe6Zv7xnsdwPV5lzdW0Z329tXTZGuGVTR7h5e5zfMow7baaN3HXkL1DYM4fAzkCGBwQ&lib=Mbk6lr1xXuYZoAkSznTHiWQI-Ji5iuudj";

fetch(API_URL)
  .then(response => response.json())
  .then(datos => {

    const contenedor = document.getElementById("partidos");

    datos.slice(1).forEach(partido => {

      contenedor.innerHTML += `
        <div class="partido">
          <h4>${partido[2]} vs ${partido[3]}</h4>
          <p>${partido[1]}</p>
        </div>
      `;

    });

  })
  .catch(error => {
    console.error(error);
  });
