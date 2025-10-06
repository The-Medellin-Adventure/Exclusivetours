(function(){if(typeof atob==='undefined'){globalThis.atob=function(b){return Buffer.from(b,'base64').toString('binary');};}})();
window.token = new URLSearchParams(window.location.search).get(atob('dG9rZW4='));

'use strict';

(function () {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA || {};

window.token = new URLSearchParams(window.location.search).get("tokenatob('KTsKY29uc3QgRklSU1RfU0NFTkVfSUQgPSA=')0-plaza-botero-botero";

if (window.token) {
  fetch(`https://exclusivetours.vercel.app/api/verify-token?token=${window.token}`, { headers: { Accept: "application/json" } })
    .then(async res => {
      const data = await res.json().catch(() => ({}));
      console.log("🔎 VERIFY-TOKEN RESPUESTA:", res.status, JSON.stringify(data, null, 2));

      if (res.status === 403 || data.ok === false) {
        showErrorMessage("🚫 Acceso denegado", data.error || "Este enlace ya fue usado o expiró.");
        ocultarUI();
        throw new Error("Token inválido o expirado");
      }

      if (data.ok === true) {
        console.log("✅ Token válido, mostrar tour");
        mostrarUI();
      }
    })
    .catch(err => {
      console.warn("Error verificando token:", err.message);
    });
}

  var panoElement = document.querySelector('#pano');

  var sceneNameElement = document.getElementById('sceneTitle') || document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  var viewerOpts = {
    controls: {
      mouseViewMode: (data.settings && data.settings.mouseViewMode) || 'drag'
    }
  };
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);
  window.viewer = viewer;

  var currentSwiper = null;

  var activeView = null;

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // =========================
// Funciones de error y ocultar UI
// =========================
function ocultarUI() {
  document.querySelectorAll(
    '.link-hotspot-icon, .camera-hotspot, #sceneList, #titleBar, #videoCard'
  ).forEach(el => {
    if (el) el.style.display = 'none';
  });
}
function mostrarUI() {
  // Revertir lo que hace ocultarUI()
  document.querySelectorAll('.link-hotspot-icon, .camera-hotspot, #sceneList, #titleBar, #videoCard')
    .forEach(el => { if (el) el.style.display = ''; });

  // Ocultar overlay de error si existe
  const overlay = document.getElementById("errorOverlay");
  if (overlay) overlay.style.display = 'none';
}
function showErrorMessage(titulo, mensaje) {
  const overlay = document.getElementById("errorOverlay");
  if (!overlay) return;
  overlay.style.display = "flex";
  overlay.innerHTML = `
    <div style=atob('YmFja2dyb3VuZDojZmZmO2NvbG9yOiMwMDA7cGFkZGluZzoyMHB4O2JvcmRlci1yYWRpdXM6MTBweDttYXgtd2lkdGg6NDAwcHg7dGV4dC1hbGlnbjpjZW50ZXI7')>
      <h2>${escapeHtml(titulo)}</h2>
      <p>${escapeHtml(mensaje)}</p>
      <p style="margin-top:12px;font-size:14px;color:#444;atob('PlRoZSBNZWRlbGzDrW4gQWR2ZW50dXJlPC9wPgogICAgPC9kaXY+CiAgYDsKfQoKICAvLyBWQVJJQUJMRVMgR0xPQkFMRVMKICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICB2YXIgY3VycmVudFNjZW5lID0gbnVsbDsKICB2YXIgY3VycmVudFZpZGVvU2NlbmVJZCA9IG51bGw7CiAgdmFyIGN1cnJlbnRWaWRlb1RpbWVvdXQgPSBudWxsOwoKICAvLyBOVUVWQVMgVkFSSUFCTEVTIHBhcmEgZWwgb3ZlcmxheSBncmFuZGUKICBsZXQgYmlnT3ZlcmxheU9wZW4gPSBmYWxzZTsKICBsZXQgc21hbGxTdGFydFRpbWVvdXQgPSBudWxsOwoKICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIEZVTkNJw5NOIE1PU1RSQVIgQ0FSUlVTRUwKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PQpmdW5jdGlvbiBtb3N0cmFyQ2FycnVzZWwoaW1hZ2VuZXMsIHRpdHVsbykgewogIGltYWdlbmVzID0gQXJyYXkuaXNBcnJheShpbWFnZW5lcykgPyBpbWFnZW5lcyA6IFtdOwogIGNvbnN0IGNhcnJ1c2VsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnJ1c2VsQ29udGFpbmVyJyk7CiAgY29uc3QgY2FycnVzZWxUaXR1bG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FycnVzZWxUaXR1bG8nKTsKICBjb25zdCBzd2lwZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnJ1c2VsIC5zd2lwZXItd3JhcHBlcicpOwoKICBpZiAoIWNhcnJ1c2VsQ29udGFpbmVyIHx8ICFzd2lwZXJXcmFwcGVyKSB7CiAgICBjb25zb2xlLmVycm9yKA==')No se encontró el contenedor del carrusel en el HTML");
    return;
  }

  // Título
  carruselTitulo.textContent = titulo || '';

  // Limpiar
  swiperWrapper.innerHTML = '';

  imagenes.forEach(function (img) {
    var filePath = img.src || img.url || '';
    var caption = img.caption || img.texto || '';

    // Crear slide con imagen + caption
    var slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <img src="/api/signed-url?token=${window.token}&file=${encodeURIComponent(filePath)}atob('CiAgICAgICAgICAgICBzdHlsZT0=')max-width:80%;max-height:60vh;object-fit:contain;border-radius:8px;" />
        ${caption ? `<p style="margin-top:6px;color:#fff;font-size:14px;">${escapeHtml(caption)}</p>` : ""}
      </div>
    `;
    swiperWrapper.appendChild(slide);
  });

  carruselContainer.style.display = atob('ZmxleA==');

  if (currentSwiper) {
    try { currentSwiper.destroy(true, true); } catch (e) {}
    currentSwiper = null;
  }

  // Inicializar el carrusel sin esperar JSON
  Promise.resolve().finally(() => {
    currentSwiper = new Swiper('.carrusel-swiperatob('LCB7CiAgICAgIGxvb3A6IGltYWdlbmVzLmxlbmd0aCA+IDEsCiAgICAgIHNsaWRlc1BlclZpZXc6IDEsCiAgICAgIHNwYWNlQmV0d2VlbjogMTAsCiAgICAgIGF1dG9wbGF5OiB7IGRlbGF5OiAzNTAwLCBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UgfSwKICAgICAgcGFnaW5hdGlvbjogeyBlbDog').swiper-pagination', clickable: true },
      navigation: { nextEl: atob('LnN3aXBlci1idXR0b24tbmV4dA=='), prevEl: '.swiper-button-prevatob('IH0KICAgIH0pOwogIH0pOwoKICB2YXIgY2VycmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQo')cerrarCarrusel');
  if (cerrarBtn) {
    cerrarBtn.onclick = function () {
      carruselContainer.style.display = atob('bm9uZQ==');
      swiperWrapper.innerHTML = 'atob('OwogICAgICBpZiAoY3VycmVudFN3aXBlcikgewogICAgICAgIHRyeSB7IGN1cnJlbnRTd2lwZXIuZGVzdHJveSh0cnVlLCB0cnVlKTsgfSBjYXRjaCAoZSkge30KICAgICAgICBjdXJyZW50U3dpcGVyID0gbnVsbDsKICAgICAgfQogICAgfTsKICB9Cn0KCndpbmRvdy5tb3N0cmFyQ2FycnVzZWwgPSBtb3N0cmFyQ2FycnVzZWw7CgogIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0KICAvLyBDUkVBUiBFU0NFTkFTCiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PQogIGZ1bmN0aW9uIGNyZWF0ZVNjZW5lKHNjZW5lRGF0YSkgewp2YXIgdXJsUHJlZml4ID0gYC9hcGkvc2lnbmVkLXVybD90b2tlbj0ke3dpbmRvdy50b2tlbn0mZmlsZT10aWxlcy8ke3NjZW5lRGF0YS5pZH1gOwp2YXIgc291cmNlID0gTWFyemlwYW5vLkltYWdlVXJsU291cmNlLmZyb21TdHJpbmcoCiAgdXJsUHJlZml4ICsgIi97en0ve2Z9L3t5fS97eH0uanBnIiwKICB7IGN1YmVNYXBQcmV2aWV3VXJsOiB1cmxQcmVmaXggKyAiL3ByZXZpZXcuanBnIiB9Cik7CgogICAgdmFyIGdlb21ldHJ5ID0gbmV3IE1hcnppcGFuby5DdWJlR2VvbWV0cnkoc2NlbmVEYXRhLmxldmVscyk7CiAgICB2YXIgbGltaXRlciA9IE1hcnppcGFuby5SZWN0aWxpbmVhclZpZXcubGltaXQudHJhZGl0aW9uYWwoc2NlbmVEYXRhLmZhY2VTaXplLCAxMDAgKiBNYXRoLlBJIC8gMTgwLCAxMjAgKiBNYXRoLlBJIC8gMTgwKTsKICAgIHZhciB2aWV3ID0gbmV3IE1hcnppcGFuby5SZWN0aWxpbmVhclZpZXcoc2NlbmVEYXRhLmluaXRpYWxWaWV3UGFyYW1ldGVycywgbGltaXRlcik7CiAgICB2YXIgc2NlbmUgPSB2aWV3ZXIuY3JlYXRlU2NlbmUoeyBzb3VyY2U6IHNvdXJjZSwgZ2VvbWV0cnk6IGdlb21ldHJ5LCB2aWV3OiB2aWV3LCBwaW5GaXJzdExldmVsOiB0cnVlIH0pOwoKICAgIChzY2VuZURhdGEubGlua0hvdHNwb3RzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChob3RzcG90KSB7CiAgICAgIHZhciBlbGVtZW50ID0gY3JlYXRlTGlua0hvdHNwb3RFbGVtZW50KGhvdHNwb3QpOwogICAgICBzY2VuZS5ob3RzcG90Q29udGFpbmVyKCkuY3JlYXRlSG90c3BvdChlbGVtZW50LCB7IHlhdzogaG90c3BvdC55YXcsIHBpdGNoOiBob3RzcG90LnBpdGNoIH0pOwogICAgfSk7CgogICAgKHNjZW5lRGF0YS5pbmZvSG90c3BvdHMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGhvdHNwb3QpIHsKICAgICAgdmFyIGVsZW1lbnQgPSBjcmVhdGVJbmZvSG90c3BvdEVsZW1lbnQoaG90c3BvdCk7CiAgICAgIHNjZW5lLmhvdHNwb3RDb250YWluZXIoKS5jcmVhdGVIb3RzcG90KGVsZW1lbnQsIHsgeWF3OiBob3RzcG90LnlhdywgcGl0Y2g6IGhvdHNwb3QucGl0Y2ggfSk7CiAgICB9KTsKCiAgICAoc2NlbmVEYXRhLmhvdFNwb3RzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChob3RzcG90KSB7CiAgICAgIGlmIChob3RzcG90LnR5cGUgPT09ICJjYW1lcmEiKSB7CiAgICAgICAgdmFyIGVsZW1lbnQgPSBjcmVhdGVDYW1lcmFIb3RzcG90KGhvdHNwb3QpOwogICAgICAgIHNjZW5lLmhvdHNwb3RDb250YWluZXIoKS5jcmVhdGVIb3RzcG90KGVsZW1lbnQsIHsgeWF3OiBob3RzcG90LnlhdywgcGl0Y2g6IGhvdHNwb3QucGl0Y2ggfSk7CiAgICAgIH0KICAgIH0pOwoKICAgIHJldHVybiB7IGRhdGE6IHNjZW5lRGF0YSwgc2NlbmU6IHNjZW5lLCB2aWV3OiB2aWV3IH07CiAgfQoKICB2YXIgc2NlbmVzID0gKGRhdGEuc2NlbmVzIHx8IFtdKS5tYXAoY3JlYXRlU2NlbmUpOwoKICAvLyBWaWRlbyBncmFuZGUgc29sbyBwYXJhIGxhIGVzY2VuYSAxCiAgY29uc3QgYmlnU2NlbmVWaWRlb3MgPSB7CiAgICAiMC1wbGF6YS1ib3Rlcm8tYm90ZXJvIjogYC9hcGkvc2lnbmVkLXVybD90b2tlbj0ke3dpbmRvdy50b2tlbn0mZmlsZT12aWRlb3MvaW5zdHJ1Y2Npb25lcy5tcDRgCiAgfTsKCiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PQogIC8vIFZJREVPIFBPUiBFU0NFTkEg4oCUIGNvbnRyb2wgaW5kZXBlbmRpZW50ZQogIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0KICBjb25zdCBzY2VuZVZpZGVvcyA9IHsKICAiMC1wbGF6YS1ib3Rlcm8tYm90ZXJvIjogYC9hcGkvc2lnbmVkLXVybD90b2tlbj0ke3dpbmRvdy50b2tlbn0mZmlsZT12aWRlb3MvdmlkZW8xLm1wNGAsCiAgIjEtcGxhemEtYm90ZXJvLXktcGFsYWNpby1yYWZhZWwtdXJpYmUtdXJpYmUiOiBgL2FwaS9zaWduZWQtdXJsP3Rva2VuPSR7d2luZG93LnRva2VufSZmaWxlPXZpZGVvcy92aWRlbzIubXA0YCwKICAiMi1lc2N1bHR1cmFzLXktdHJhZGljaW4iOiBgL2FwaS9zaWduZWQtdXJsP3Rva2VuPSR7d2luZG93LnRva2VufSZmaWxlPXZpZGVvcy92aWRlbzMubXA0YCwKICAiMy1wYWxhY2lvLXJhZmFlbC11cmliZS11cmliZSI6IGAvYXBpL3NpZ25lZC11cmw/dG9rZW49JHt3aW5kb3cudG9rZW59JmZpbGU9dmlkZW9zL3ZpZGVvNC5tcDRgLAogICI0LXBhcnF1ZS1kZS1sYXMtbHVjZXMiOiBgL2FwaS9zaWduZWQtdXJsP3Rva2VuPSR7d2luZG93LnRva2VufSZmaWxlPXZpZGVvcy92aWRlbzUubXA0YCwKICAiNS1hbnRpZ3VvLWZlcnJvY2FycmlsIjogYC9hcGkvc2lnbmVkLXVybD90b2tlbj0ke3dpbmRvdy50b2tlbn0mZmlsZT12aWRlb3MvdmlkZW82Lm1wNGAsCiAgIjYtYW50aWd1YS1lc3RhY2luLW1lZGVsbG4iOiBgL2FwaS9zaWduZWQtdXJsP3Rva2VuPSR7d2luZG93LnRva2VufSZmaWxlPXZpZGVvcy92aWRlbzcubXA0YCwKICAiNy1hbHB1amFycmEiOiBgL2FwaS9zaWduZWQtdXJsP3Rva2VuPSR7d2luZG93LnRva2VufSZmaWxlPXZpZGVvcy92aWRlbzgubXA0YCwKICAiOC10cmFuc2ljaW4tY2l1ZGFkLWEtbmF0dXJhbGV6YSI6IGAvYXBpL3NpZ25lZC11cmw/dG9rZW49JHt3aW5kb3cudG9rZW59JmZpbGU9dmlkZW9zL3ZpZGVvOS5tcDRgLAogICI5LXBpZXNfZGVzY2Fsem9zIjogYC9hcGkvc2lnbmVkLXVybD90b2tlbj0ke3dpbmRvdy50b2tlbn0mZmlsZT12aWRlb3MvdmlkZW8xMC5tcDRgLAogICIxMC1jb25leGlvbi1uYXR1cmFsZXphIjogYC9hcGkvc2lnbmVkLXVybD90b2tlbj0ke3dpbmRvdy50b2tlbn0mZmlsZT12aWRlb3MvdmlkZW8xMS5tcDRgLAogICIxMS1sYWJlcmludG8tZGUtYmFtYiI6IGAvYXBpL3NpZ25lZC11cmw/dG9rZW49JHt3aW5kb3cudG9rZW59JmZpbGU9dmlkZW9zL3ZpZGVvMTIubXA0YCwKICAiMTItZWRpZmljaW8taW50ZWxpZ2VudGUtZXBtIjogYC9hcGkvc2lnbmVkLXVybD90b2tlbj0ke3dpbmRvdy50b2tlbn0mZmlsZT12aWRlb3MvdmlkZW8xMy5tcDRgLAogICIxMy1jZW50cm8tZGUtY29udmVuY2lvbmVzLXktdGVhdHJvIjogYC9hcGkvc2lnbmVkLXVybD90b2tlbj0ke3dpbmRvdy50b2tlbn0mZmlsZT12aWRlb3MvdmlkZW8xNC5tcDRgLAogICIxNC1wdWVibGl0by1wYWlzYSI6IGAvYXBpL3NpZ25lZC11cmw/dG9rZW49JHt3aW5kb3cudG9rZW59JmZpbGU9dmlkZW9zL3ZpZGVvMTUubXA0YAp9OwoKICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09CiAgLy8gT1ZFUkxBWSBERSBWSURFTyBHUkFOREUKICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09CiAgZnVuY3Rpb24gc2hvd0JpZ092ZXJsYXlGb3JTY2VuZShzY2VuZUlkKSB7CiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImJpZ1ZpZGVvT3ZlcmxheSIpOwogICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiYmlnVmlkZW9CYWNrZHJvcCIpOwogICAgY29uc3QgYmlnVmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiYmlnU2NlbmVWaWRlbyIpOwogICAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJiaWdQbGF5UGF1c2VCdG4iKTsKICAgIGNvbnN0IG11dGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiYmlnTXV0ZUJ0biIpOwogICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiYmlnQ2xvc2VCdG4iKTsKCiAgICBpZiAoIW92ZXJsYXkgfHwgIWJpZ1ZpZGVvKSByZXR1cm47CgogICAgLy8gU2kgbm8gaGF5IHZpZGVvIGNvbmZpZ3VyYWRvIHBhcmEgZXN0YSBlc2NlbmEsIG9jdWx0YXIgb3ZlcmxheQogICAgaWYgKCFiaWdTY2VuZVZpZGVvc1tzY2VuZUlkXSkgewogICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICAgIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICAgIGJpZ092ZXJsYXlPcGVuID0gZmFsc2U7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICAvLyBNb3N0cmFyIG92ZXJsYXkKICAgIGJpZ092ZXJsYXlPcGVuID0gdHJ1ZTsKICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICJmbGV4IjsKICAgIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAiYmxvY2siOwogICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsKICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCJ2aXNpYmxlIik7CiAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoInZpc2libGUiKTsKICAgIH0pOwoKICAgIC8vIENvbmZpZ3VyYXIgZnVlbnRlIHkgcmVwcm9kdWNpciAoYXV0b3BsYXkgaW50ZW50KQogICAgYmlnVmlkZW8uc3JjID0gYmlnU2NlbmVWaWRlb3Nbc2NlbmVJZF07CiAgICBiaWdWaWRlby5sb2FkKCk7CiAgICBiaWdWaWRlby5wbGF5KCkuY2F0Y2goKCkgPT4geyAgfSk7CgogICAgLy8gQ29udHJvbGVzCiAgICBpZiAocGxheUJ0bikgewogICAgICBwbGF5QnRuLm9uY2xpY2sgPSAoKSA9PiB7CiAgICAgICAgaWYgKGJpZ1ZpZGVvLnBhdXNlZCkgeyBiaWdWaWRlby5wbGF5KCk7IHBsYXlCdG4udGV4dENvbnRlbnQgPSAi4o+4IjsgfQogICAgICAgIGVsc2UgeyBiaWdWaWRlby5wYXVzZSgpOyBwbGF5QnRuLnRleHRDb250ZW50ID0gIuKWtiI7IH0KICAgICAgfTsKICAgIH0KICAgIGlmIChtdXRlQnRuKSB7CiAgICAgIG11dGVCdG4ub25jbGljayA9ICgpID0+IHsKICAgICAgICBiaWdWaWRlby5tdXRlZCA9ICFiaWdWaWRlby5tdXRlZDsKICAgICAgICBtdXRlQnRuLnRleHRDb250ZW50ID0gYmlnVmlkZW8ubXV0ZWQgPyAi8J+UhyIgOiAi8J+UiiI7CiAgICAgIH07CiAgICB9CgogICAgZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkgewogICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoInZpc2libGUiKTsKICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgidmlzaWJsZSIpOwogICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICAgICAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICJub25lIjsKICAgICAgfSwgMzUwKTsKICAgICAgdHJ5IHsgYmlnVmlkZW8ucGF1c2UoKTsgYmlnVmlkZW8uY3VycmVudFRpbWUgPSAwOyB9IGNhdGNoIChlKSB7fQogICAgICBiaWdPdmVybGF5T3BlbiA9IGZhbHNlOwoKICAgICAgLy8gSW5pY2lhciB2aWRlbyBwZXF1ZcOxbyA1cyBkZXNwdcOpcyBkZSBjZXJyYXIvdGVybWluYXIKICAgICAgc21hbGxTdGFydFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICB1cGRhdGVWaWRlb0ZvclNjZW5lKHNjZW5lSWQsIDApOwogICAgICB9LCA1MDAwKTsKICAgIH0KCiAgICBpZiAoY2xvc2VCdG4pIGNsb3NlQnRuLm9uY2xpY2sgPSBjbG9zZU92ZXJsYXk7CiAgICBpZiAoYmFja2Ryb3ApIGJhY2tkcm9wLm9uY2xpY2sgPSAoZSkgPT4geyBpZiAoZS50YXJnZXQgPT09IGJhY2tkcm9wKSBjbG9zZU92ZXJsYXkoKTsgfTsKCiAgICAvLyBDdWFuZG8gdGVybWluYSDihpIgZGVzZW5jYWRlbmEgY2llcnJlIHkgZWwgYXJyYW5xdWUgcGVxdWXDsW8KICAgIGJpZ1ZpZGVvLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7CiAgICAgIGNsb3NlT3ZlcmxheSgpOwogICAgfTsKICB9CgogIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0KICAvLyBWSURFTyBQRVFVRcORTyBMQVRFUkFMCiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PQogIGZ1bmN0aW9uIHVwZGF0ZVZpZGVvRm9yU2NlbmUoc2NlbmVJZCwgZm9yY2VEZWxheSkgewogICAgY29uc3QgdmlkZW9DYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInZpZGVvQ2FyZCIpOwogICAgY29uc3Qgc2NlbmVWaWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzY2VuZVZpZGVvIik7CiAgICBpZiAoIXZpZGVvQ2FyZCB8fCAhc2NlbmVWaWRlbykgcmV0dXJuOwoKICAgIC8vIExpbXBpYXIgdGltZXJzIHByZXZpb3MKICAgIGlmIChjdXJyZW50VmlkZW9UaW1lb3V0KSB7CiAgICAgIGNsZWFyVGltZW91dChjdXJyZW50VmlkZW9UaW1lb3V0KTsKICAgICAgY3VycmVudFZpZGVvVGltZW91dCA9IG51bGw7CiAgICB9CiAgICBpZiAoc21hbGxTdGFydFRpbWVvdXQpIHsKICAgICAgY2xlYXJUaW1lb3V0KHNtYWxsU3RhcnRUaW1lb3V0KTsKICAgICAgc21hbGxTdGFydFRpbWVvdXQgPSBudWxsOwogICAgfQoKICAgIC8vIERldGVuZXIgdmlkZW8gc2kgc2UgY2FtYmlhIGRlIGVzY2VuYQogICAgaWYgKGN1cnJlbnRWaWRlb1NjZW5lSWQgJiYgY3VycmVudFZpZGVvU2NlbmVJZCAhPT0gc2NlbmVJZCkgewogICAgICBzY2VuZVZpZGVvLnBhdXNlKCk7CiAgICAgIHRyeSB7IHNjZW5lVmlkZW8uY3VycmVudFRpbWUgPSAwOyB9IGNhdGNoIChlKSB7fQogICAgfQoKICAgIC8vIFNpIGxhIGVzY2VuYSB0aWVuZSB2aWRlbyBncmFuZGUgeSBlc3TDoSBhYmllcnRvIOKGkiBvY3VsdGFyIGVsIHBlcXVlw7FvCiAgICBpZiAoYmlnU2NlbmVWaWRlb3Nbc2NlbmVJZF0gJiYgYmlnT3ZlcmxheU9wZW4pIHsKICAgICAgdmlkZW9DYXJkLnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICAgIGN1cnJlbnRWaWRlb1NjZW5lSWQgPSBudWxsOwogICAgICByZXR1cm47CiAgICB9CgogICAgLy8gVmVyaWZpY2FyIHNpIGhheSB2aWRlbyBwYXJhIGxhIGVzY2VuYQogICAgaWYgKCFzY2VuZVZpZGVvc1tzY2VuZUlkXSkgewogICAgICB2aWRlb0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgidmlzaWJsZSIpOwogICAgICBjdXJyZW50VmlkZW9TY2VuZUlkID0gbnVsbDsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIC8vIENvbmZpZ3VyYXIgbnVldm8gdmlkZW8KICAgIGN1cnJlbnRWaWRlb1NjZW5lSWQgPSBzY2VuZUlkOwogICAgc2NlbmVWaWRlby5zcmMgPSBzY2VuZVZpZGVvc1tzY2VuZUlkXTsKICAgIHNjZW5lVmlkZW8ubG9hZCgpOwoKIC8vIE1vc3RyYXIgdGFyamV0YSBkZWwgdmlkZW8KICAgIHZpZGVvQ2FyZC5jbGFzc0xpc3QuYWRkKCJ2aXNpYmxlIik7CnZpZGVvQ2FyZC5zdHlsZS5kaXNwbGF5ID0gImJsb2NrIjsKCiAgICAvLyBEZWxheSBkaW7DoW1pY286IDVzIGVuIGxhIHByaW1lcmEgZXNjZW5hIChzaSBzZSBzb2xpY2l0YSBwb3IgZGVmZWN0byksCiAgICAvLyAzcyBlbiBsYXMgZGVtw6FzLiBTaSBzZSBwYXNhIGZvcmNlRGVsYXkgKG7Dum1lcm8pIHNlIHVzYSBlc2UgdmFsb3IuCiAgICBsZXQgZGVsYXkgPSAzMDAwOwogICAgaWYgKHR5cGVvZiBmb3JjZURlbGF5ID09PSAibnVtYmVyIikgZGVsYXkgPSBmb3JjZURlbGF5OwogICAgZWxzZSBpZiAoc2NlbmVJZCA9PT0gRklSU1RfU0NFTkVfSUQpIGRlbGF5ID0gNTAwMDsKCiAgICBjdXJyZW50VmlkZW9UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7CiAgICAgIHNjZW5lVmlkZW8ucGxheSgpLmNhdGNoKGVyciA9PiBjb25zb2xlLndhcm4oIk5vIHNlIHB1ZG8gcmVwcm9kdWNpciBlbCB2aWRlbzoiLCBlcnIpKTsKICAgIH0sIGRlbGF5KTsKCiAgICAvLyBTaSBlbCB2aWRlbyB0ZXJtaW5hIHkgc2VndWltb3MgZW4gbGEgbWlzbWEgZXNjZW5hIOKGkiBwYXVzYXIgeSBkZWphciDDumx0aW1vIGZyYW1lCiAgICBzY2VuZVZpZGVvLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7CiAgICAgIGlmIChjdXJyZW50VmlkZW9TY2VuZUlkID09PSBzY2VuZUlkKSB7CiAgICAgICAgc2NlbmVWaWRlby5wYXVzZSgpOwogICAgICAgIHRyeSB7IHNjZW5lVmlkZW8uY3VycmVudFRpbWUgPSBzY2VuZVZpZGVvLmR1cmF0aW9uOyB9IGNhdGNoIChlKSB7fQogICAgICB9CiAgICB9OwogIH0KCiAgLy8gLS0tLSBDb250cm9sZXMgcGVyc29uYWxpemFkb3MgZGUgdmlkZW8gKHBlcXVlw7FvKSAtLS0tCiAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgic2NlbmVWaWRlbyIpOwogIGNvbnN0IHBsYXlQYXVzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJwbGF5UGF1c2VCdG4iKTsKICBjb25zdCBtdXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIm11dGVCdG4iKTsKICAvLyBBbGd1bm9zIEhUTUwgdGVuw61hbiBkb3MgaWRzIGRpZmVyZW50ZXMgcGFyYSBjZXJyYXI6IGNsb3NlVmlkZW9DYXJkIHkgY2xvc2VCdG4g4oCUIGludGVudG8gc29wb3J0YXIgYW1ib3MuCiAgY29uc3QgY2xvc2VWaWRlb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjbG9zZVZpZGVvQ2FyZCIpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjbG9zZUJ0biIpOwogIGNvbnN0IHZpZGVvQ2FyZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInZpZGVvQ2FyZCIpOwogIGNvbnN0IHZpZGVvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJ2aWRlb0ljb24iKTsKCiAgaWYgKHZpZGVvICYmIHBsYXlQYXVzZUJ0biAmJiBtdXRlQnRuICYmIGNsb3NlVmlkZW9CdG4gJiYgdmlkZW9DYXJkRWwgJiYgdmlkZW9JY29uKSB7CiAgICBwbGF5UGF1c2VCdG4uYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKSA9PiB7CiAgICAgIGlmICh2aWRlby5wYXVzZWQpIHsKICAgICAgICB2aWRlby5wbGF5KCk7CiAgICAgICAgcGxheVBhdXNlQnRuLnRleHRDb250ZW50ID0gIuKPuCI7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgdmlkZW8ucGF1c2UoKTsKICAgICAgICBwbGF5UGF1c2VCdG4udGV4dENvbnRlbnQgPSAi4pa2IjsKICAgICAgfQogICAgfSk7CgogICAgbXV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsICgpID0+IHsKICAgICAgdmlkZW8ubXV0ZWQgPSAhdmlkZW8ubXV0ZWQ7CiAgICAgIG11dGVCdG4udGV4dENvbnRlbnQgPSB2aWRlby5tdXRlZCA/ICLwn5SHIiA6ICLwn5SKIjsKICAgIH0pOwoKICAgIC8vIENlcnJhciB0YXJqZXRhIOKGkiBtb3N0cmFyIGljb25vIGZsb3RhbnRlCiAgICBjbG9zZVZpZGVvQnRuLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCkgPT4gewogICAgICB2aWRlby5wYXVzZSgpOwogICAgICB2aWRlb0NhcmRFbC5zdHlsZS5kaXNwbGF5ID0gIm5vbmUiOwogICAgICB2aWRlb0ljb24uc3R5bGUuZGlzcGxheSA9ICJibG9jayI7CiAgICB9KTsKCiAgICAvLyBSZWFicmlyIHRhcmpldGEgZGVzZGUgaWNvbm8KICAgIHZpZGVvSWNvbi5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsICgpID0+IHsKICAgICAgdmlkZW9DYXJkRWwuc3R5bGUuZGlzcGxheSA9ICJibG9jayI7CiAgICAgIHZpZGVvSWNvbi5zdHlsZS5kaXNwbGF5ID0gIm5vbmUiOwogICAgfSk7CiAgfQoKICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09CiAgLy8gU1dJVENIIFNDRU5FICjDum5pY28sIHJvYnVzdG8pCiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PQogIGZ1bmN0aW9uIHN3aXRjaFNjZW5lKHNjZW5lKSB7CiAgICBpZiAoIXNjZW5lKSByZXR1cm47CgogICAgLy8gTGltcGllemE6IHBhcmFyIGN1YWxxdWllciB2aWRlbyAvIHRpbWVycyBkZSBsYSBlc2NlbmEgYW50ZXJpb3IgcGFyYSBldml0YXIgaW50ZXJmZXJlbmNpYXMKICAgIHRyeSB7CiAgICAgIGlmIChjdXJyZW50VmlkZW9UaW1lb3V0KSB7IGNsZWFyVGltZW91dChjdXJyZW50VmlkZW9UaW1lb3V0KTsgY3VycmVudFZpZGVvVGltZW91dCA9IG51bGw7IH0KICAgICAgaWYgKHNtYWxsU3RhcnRUaW1lb3V0KSB7IGNsZWFyVGltZW91dChzbWFsbFN0YXJ0VGltZW91dCk7IHNtYWxsU3RhcnRUaW1lb3V0ID0gbnVsbDsgfQogICAgICB2YXIgc21hbGxWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQo')sceneVideo'); if (smallV) { smallV.pause(); try { smallV.currentTime = 0; } catch (e) {} }
      var bigV = document.getElementById(atob('YmlnU2NlbmVWaWRlbw==')); if (bigV) { bigV.pause(); try { bigV.currentTime = 0; } catch (e) {} }
      var overlay = document.getElementById('bigVideoOverlayatob('KTsgdmFyIGJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQo')bigVideoBackdrop');
      if (overlay) { overlay.classList.remove(atob('dmlzaWJsZQ==')); overlay.style.display = 'noneatob('OyB9CiAgICAgIGlmIChiYWNrZHJvcCkgeyBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKA==')visible'); backdrop.style.display = atob('bm9uZQ=='); }
      bigOverlayOpen = false;
    } catch (e) {}

    stopAutorotate();
    try {
      scene.view.setParameters(scene.data.initialViewParameters);
    } catch (e) {  }

    scene.scene.switchTo();
    updateSceneName(scene);
    updateSceneList(scene);

    // actualizar la vista activa (para los botones)
    activeView = scene.view;

    // Video por escena y overlay
    showBigOverlayForScene(scene.data.id);
    // Si el overlay está activo, updateVideoForScene ocultará el pequeño. El inicio real
    // del pequeño se hace después del cierre del grande según la lógica anterior.
    updateVideoForScene(scene.data.id);

    // Menú visible solo en la escena FIRST_SCENE_ID
    if (scene.data && scene.data.id === FIRST_SCENE_ID) {
      showSceneList();
    } else {
      hideSceneList();
    }

    startAutorotate();
  }

  // Inicializar en la primera escena si existe (intento abrir FIRST_SCENE_ID si está presente)
  if (scenes.length > 0) {
    var start = scenes.find(s => s.data && s.data.id === FIRST_SCENE_ID) || scenes[0];
    switchScene(start);
  }

  // =========================
  // UI helpers (nombre y lista)
  // =========================
  function updateSceneName(scene) {
    if (sceneNameElement) sceneNameElement.innerHTML = sanitize(scene.data.name || 'atob('KTsKICB9CgogIGZ1bmN0aW9uIHVwZGF0ZVNjZW5lTGlzdChzY2VuZSkgewogICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzY2VuZUVsZW1lbnRzIHx8IFtdLCBmdW5jdGlvbiAoZWwpIHsKICAgICAgaWYgKCFlbCkgcmV0dXJuOwogICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKA==')current', el.getAttribute(atob('ZGF0YS1pZA==')) === (scene && scene.data && scene.data.id));
    });
  }

  function sanitize(s) {
    return (s || 'atob('KS5yZXBsYWNlKC8mL2csIA==')&amp;').replace(/</g, atob('Jmx0Ow==')).replace(/>/g, '&gt;atob('KTsKICB9CgogIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0KICAvLyBIT1RTUE9UUyAobWFudGVuZ28gdHVzIGZ1bmNpb25lcywgY29uIG3DrW5pbW8gY2FtYmlvKQogIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0KICBmdW5jdGlvbiBjcmVhdGVMaW5rSG90c3BvdEVsZW1lbnQoaG90c3BvdCkgewogICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KA==')div');
    wrapper.classList.add(atob('aG90c3BvdA=='), 'link-hotspotatob('KTsKCiAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQo')img');
    icon.src = atob('aW1nL2xpbmsucG5n');
    icon.classList.add('link-hotspot-iconatob('KTsKICAgIGlmICh0eXBlb2YgaG90c3BvdC5yb3RhdGlvbiAhPT0g')undefined') icon.style.transform = atob('cm90YXRlKA==') + hotspot.rotation + 'rad)atob('OwogICAgd3JhcHBlci5hcHBlbmRDaGlsZChpY29uKTsKCiAgICB2YXIgdG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQo')div');
    tooltip.classList.add(atob('aG90c3BvdC10b29sdGlw'), 'link-hotspot-tooltipatob('KTsKICAgIHZhciBzY2VuZURhdGEgPSBmaW5kU2NlbmVEYXRhQnlJZChob3RzcG90LnRhcmdldCk7CiAgICB0b29sdGlwLmlubmVySFRNTCA9IChzY2VuZURhdGEgJiYgc2NlbmVEYXRhLm5hbWUpID8gc2NlbmVEYXRhLm5hbWUgOiA=')';
    wrapper.appendChild(tooltip);

    wrapper.addEventListener(atob('Y2xpY2s='), function () {
      var s = findSceneById(hotspot.target);
      if (s) switchScene(s);
    });
    stopTouchAndScrollEventPropagation(wrapper);
    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {
    var wrapper = document.createElement('divatob('KTsKICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCg=')hotspot', atob('aW5mby1ob3RzcG90'));

    var header = document.createElement('divatob('KTsKICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKA==')info-hotspot-header');

    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapperatob('KTsKICAgIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCg=')img');
    icon.src = atob('aW1nL2luZm8ucG5n');
    icon.classList.add('info-hotspot-iconatob('KTsKICAgIGljb25XcmFwcGVyLmFwcGVuZENoaWxkKGljb24pOwoKICAgIHZhciB0aXRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KA==')div');
    titleWrapper.classList.add(atob('aW5mby1ob3RzcG90LXRpdGxlLXdyYXBwZXI='));
    var title = document.createElement('divatob('KTsKICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQo')info-hotspot-title');
    title.innerHTML = hotspot.title || '';
    titleWrapper.appendChild(title);

    var closeWrapper = document.createElement('divatob('KTsKICAgIGNsb3NlV3JhcHBlci5jbGFzc0xpc3QuYWRkKA==')info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.pngatob('OwogICAgY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQo')info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    var text = document.createElement('div');
    text.classList.add('info-hotspot-textatob('KTsKICAgIHRleHQuaW5uZXJIVE1MID0gaG90c3BvdC50ZXh0IHx8IA==')';

    wrapper.appendChild(header);
    wrapper.appendChild(text);

    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modalatob('KTsKICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpOwoKICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoKSB7CiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSg=')visible');
      modal.classList.toggle(atob('dmlzaWJsZQ=='));
    };

    wrapper.querySelector('.info-hotspot-headeratob('KS5hZGRFdmVudExpc3RlbmVyKA==')click', toggle);
    modal.querySelector(atob('LmluZm8taG90c3BvdC1jbG9zZS13cmFwcGVy')).addEventListener('clickatob('LCB0b2dnbGUpOwoKICAgIHN0b3BUb3VjaEFuZFNjcm9sbEV2ZW50UHJvcGFnYXRpb24od3JhcHBlcik7CiAgICByZXR1cm4gd3JhcHBlcjsKICB9CgogIGZ1bmN0aW9uIGNyZWF0ZUNhbWVyYUhvdHNwb3QoaG90c3BvdCkgewogICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KA==')img');
    element.src = hotspot.image || atob('aW1nL0NhbWFyYS5wbmc=');
    element.className = 'camera-hotspot-iconatob('OwogICAgZWxlbWVudC5zdHlsZSA9ICJ3aWR0aDo0OHB4O2hlaWdodDo0OHB4O2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAycHggOHB4IHJnYmEoMCwwLDAsMC4yNSk7IjsKICAgIGVsZW1lbnQudGl0bGUgPSBob3RzcG90LnRvb2x0aXAgfHwgaG90c3BvdC50aXRsZSB8fCAiIjsKCiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIo')click', function () {
      if (hotspot.carrusel) {
        mostrarCarrusel(hotspot.images || [], hotspot.tooltip || hotspot.title || '');
      } else {
        showImageModal(hotspot.photo, hotspot.title);
      }
    });
    return element;
  }

  function showImageModal(photoSrc, title) {
    var oldModal = document.getElementById('custom-image-modalatob('KTsKICAgIGlmIChvbGRNb2RhbCkgb2xkTW9kYWwucmVtb3ZlKCk7CgogICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCg=')div');
    modal.id = atob('Y3VzdG9tLWltYWdlLW1vZGFs');
    modal.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:10000;atob('OwoKICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCg=')div');
    content.style = atob('YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MTBweDtwYWRkaW5nOjIwcHg7Ym94LXNoYWRvdzowIDhweCAzMnB4IHJnYmEoMCwwLDAsMC4zMik7cG9zaXRpb246cmVsYXRpdmU7');

    var img = document.createElement('imgatob('KTsKICAgIGltZy5zcmMgPSBwaG90b1NyYzsKICAgIGltZy5hbHQgPSB0aXRsZSB8fCA=')';
    img.style = atob('bWF4LXdpZHRoOjkwdnc7bWF4LWhlaWdodDo4MHZoO2JvcmRlci1yYWRpdXM6OHB4Ow==');
    content.appendChild(img);

    if (title) {
      var caption = document.createElement('divatob('KTsKICAgICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IHRpdGxlOwogICAgICBjYXB0aW9uLnN0eWxlID0g')margin-top:10px;font-weight:bold;text-align:center;';
      content.appendChild(caption);
    }

    var close = document.createElement(atob('c3Bhbg=='));
    close.textContent = '×atob('OwogICAgY2xvc2Uuc3R5bGUgPSA=')position:absolute;top:8px;right:16px;cursor:pointer;font-size:2rem;color:#222;';
    close.addEventListener(atob('Y2xpY2s='), function () { modal.remove(); });
    content.appendChild(close);

    modal.appendChild(content);
    document.body.appendChild(modal);

    modal.addEventListener('clickatob('LCBmdW5jdGlvbiAoZSkgewogICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSBtb2RhbC5yZW1vdmUoKTsKICAgIH0pOwogIH0KCiAgZnVuY3Rpb24gc3RvcFRvdWNoQW5kU2Nyb2xsRXZlbnRQcm9wYWdhdGlvbihlbGVtZW50KSB7CiAgICBb')touchstart', atob('dG91Y2htb3Zl'), 'touchend', 'touchcancel', atob('d2hlZWw='), 'mousewheelatob('XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHsKICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGV2ZW50KSB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9KTsKICAgIH0pOwogIH0KCiAgZnVuY3Rpb24gZmluZFNjZW5lQnlJZChpZCkgewogICAgcmV0dXJuIHNjZW5lcy5maW5kKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRhdGEuaWQgPT09IGlkOyB9KTsKICB9CgogIGZ1bmN0aW9uIGZpbmRTY2VuZURhdGFCeUlkKGlkKSB7CiAgICByZXR1cm4gKGRhdGEuc2NlbmVzIHx8IFtdKS5maW5kKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkID09PSBpZDsgfSk7CiAgfQoKICAvLyBBc29jaWFyIGV2ZW50b3MgYSBsb3MgZWxlbWVudG9zIGRlIGxhIGxpc3RhIGRlIGVzY2VuYXMgKERPTSkKICBzY2VuZXMuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUpIHsKICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Io')#sceneList .scene[data-id="' + scene.data.id + '"]');
    if (!el) return;
    el.addEventListener('clickatob('LCBmdW5jdGlvbiAoKSB7CiAgICAgIHN3aXRjaFNjZW5lKHNjZW5lKTsKICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKA==')mobile')) hideSceneList();
    });
  });

  // Fullscreen
  if (screenfull && screenfull.enabled && data.settings && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    if (fullscreenToggleElement) {
      fullscreenToggleElement.addEventListener('click', function () { screenfull.toggle(); });
      screenfull.on('change', function () { fullscreenToggleElement.classList.toggle('enabled', screenfull.isFullscreen); });
    }
  }

  // Autorotate
  if (autorotateToggleElement) autorotateToggleElement.addEventListener('click', toggleAutorotate);
  var autorotate = Marzipano.autorotate({ yawSpeed: 0.5, targetPitch: -0.3529, targetFov: Math.PI / 2 });
  if (data.settings && data.settings.autorotateEnabled) {
    if (autorotateToggleElement) autorotateToggleElement.classList.add(atob('ZW5hYmxlZA=='));
  }

  function toggleAutorotate() {
    if (!autorotateToggleElement) return;
    if (autorotateToggleElement.classList.contains('enabledatob('KSkgewogICAgICBhdXRvcm90YXRlVG9nZ2xlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKA==')enabled'); stopAutorotate();
    } else {
      autorotateToggleElement.classList.add(atob('ZW5hYmxlZA==')); startAutorotate();
    }
  }
  function startAutorotate() {
    if (!autorotateToggleElement || !autorotateToggleElement.classList.contains('enabledatob('KSkgcmV0dXJuOwogICAgdmlld2VyLnN0YXJ0TW92ZW1lbnQoYXV0b3JvdGF0ZSk7IHZpZXdlci5zZXRJZGxlTW92ZW1lbnQoMzAwMCwgYXV0b3JvdGF0ZSk7CiAgfQogIGZ1bmN0aW9uIHN0b3BBdXRvcm90YXRlKCkgeyB2aWV3ZXIuc3RvcE1vdmVtZW50KCk7IHZpZXdlci5zZXRJZGxlTW92ZW1lbnQoSW5maW5pdHkpOyB9CgogIC8vIE1vc3RyYXIvb2N1bHRhciBsaXN0YSBlc2NlbmFzCiAgZnVuY3Rpb24gc2hvd1NjZW5lTGlzdCgpIHsgaWYgKHNjZW5lTGlzdEVsZW1lbnQpIHNjZW5lTGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCg=')enabled'); if (sceneListToggleElement) sceneListToggleElement.classList.add(atob('ZW5hYmxlZA==')); }
  function hideSceneList() { if (sceneListElement) sceneListElement.classList.remove('enabledatob('KTsgaWYgKHNjZW5lTGlzdFRvZ2dsZUVsZW1lbnQpIHNjZW5lTGlzdFRvZ2dsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSg=')enabled'); }

  // Toggle lista escenas (botón)
  var sceneListToggle = document.getElementById("sceneListToggle");
  var sceneList = document.getElementById("sceneList");
  if (sceneListToggle && sceneList) {
    sceneListToggle.addEventListener("click", function () {
      var isEnabled = sceneList.classList.toggle("enabled");
      var iconOn = sceneListToggle.querySelector(".icon.on");
      var iconOff = sceneListToggle.querySelector(".icon.off");
      if (iconOn) iconOn.style.display = isEnabled ? "inline" : "none";
      if (iconOff) iconOff.style.display = isEnabled ? "none" : "inline";
    });
  }

// =========================
// BOTÓN DE PANTALLA COMPLETA
// =========================
if (document.fullscreenEnabled) {
  const fsBtn = document.getElementById('fullscreenToggle');
  if (fsBtn) {
    fsBtn.addEventListener('click', function() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.body.requestFullscreen();
      }
    });
  }
} else {
  const fsBtn = document.getElementById('fullscreenToggle');
  if (fsBtn) fsBtn.style.display = 'none';
}

// =========================
// BOTONES DE CONTROL
// =========================
var velocity = 1;
var zoomSpeed = 1;

  var el;
  el = document.getElementById('viewLeft');
  if (el) el.addEventListener('click', function () { if (activeView) activeView.setYaw(activeView.yaw() - velocity); });
  el = document.getElementById('viewRight');
  if (el) el.addEventListener('click', function () { if (activeView) activeView.setYaw(activeView.yaw() + velocity); });
  el = document.getElementById('viewUp');
  if (el) el.addEventListener('click', function () { if (activeView) activeView.setPitch(activeView.pitch() + velocity); });
  el = document.getElementById('viewDown');
  if (el) el.addEventListener('click', function () { if (activeView) activeView.setPitch(activeView.pitch() - velocity); });
  el = document.getElementById('viewIn');
  if (el) el.addEventListener('click', function () { if (activeView) activeView.setFov(activeView.fov() - zoomSpeed); });
  el = document.getElementById('viewOut');
  if (el) el.addEventListener('click', function () { if (activeView) activeView.setFov(activeView.fov() + zoomSpeed); });

  // Si no es mobile, mostramos la lista (pero switchScene la ocultará si no es la primera escena)
  if (!document.body.classList.contains('mobile')) showSceneList();

})();
