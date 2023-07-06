using Microsoft.AspNetCore.Mvc;

namespace ThePlayZone.Controllers
{
    public class PagoControllers : Controller
    {
        public ActionResult Checkout()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ProcessPayment(string cardNumber, string expirationDate, string cvv)
        {
            // Lógica para procesar el pago
            if (ProcessPaymentLogic(cardNumber, expirationDate, cvv))
            {
                // Pago exitoso

                return RedirectToAction("PaymentConfirmation");
            }
            else
            {
                // Pago fallido
                ViewBag.ErrorMessage = "Error al procesar el pago. Por favor, inténtelo nuevamente.";

                return View("Checkout");
            }
        }

        public ActionResult PaymentConfirmation()
        {
            return View();
        }

        private bool ProcessPaymentLogic(string cardNumber, string expirationDate, string cvv)
        {
            // Validar que los campos no estén vacíos
            if (string.IsNullOrWhiteSpace(cardNumber) || string.IsNullOrWhiteSpace(expirationDate) || string.IsNullOrWhiteSpace(cvv))
            {
                return false; // Pago fallido
            }

            //  Verificar si el número de tarjeta es válido
            if (!IsCardNumberValid(cardNumber))
            {
                return false; // Pago fallido
            }

            //  Realizar la verificación con una pasarela de pago externa
            // bool paymentResult = PaymentGateway.ProcessPayment(cardNumber, expirationDate, cvv);
            // return paymentResult;

            return true; // Pago exitoso (simulado en este ejemplo)
        }

        private bool IsCardNumberValid(string cardNumber)
        {

            // Validar que el número de tarjeta tenga 16 dígitos
            return cardNumber.Length == 16;
        }
    }
}