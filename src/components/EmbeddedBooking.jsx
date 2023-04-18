
import { Helmet } from "react-helmet";



// <iframe id='cliniko-62506279' src='https://my-org.au3.cliniko.com/bookings?embedded=true' frameborder='0' scrolling='auto' width='100%' height='1000' style='pointer-events: auto;'></iframe>
// <script type='text/javascript'>
//   window.addEventListener('message', function handleIFrameMessage (e) {
//     var clinikoBookings = document.getElementById('cliniko-62506279');
//     if (typeof e.data !== 'string') return;
//     if (e.data.search('cliniko-bookings-resize') > -1) {
//       var height = Number(e.data.split(':')[1]);
//       clinikoBookings.style.height = height + 'px';
//     }
//     e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
//   });
// </script>