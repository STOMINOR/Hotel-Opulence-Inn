<script>
  var app = angular.module('hotelApp', []);

  app.controller('BookingController'), function($scope) {
    $scope.booking = {}}
    $scope.confirmationMessage = "";

    $scope.submitBooking = function() {
      // Simulating a booking service call
      $scope.confirmationMessage = "Thank you, " + $scope.booking.name + "! Your booking from " + 
        $scope.booking.checkin + " to " + $scope.booking.checkout + " has been confirmed. We'll contact you via " + 
        $scope.booking.email}
      
      // Reset form
      $scope.booking = {};
</script>
