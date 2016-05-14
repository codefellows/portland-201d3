var min_tol = 0.005; // Minimum tolerance

function getDiag(a, b, c) { // Get 3-D diagonal length
  console.log('  Entered getDiag(): a=' + a + ' b=' + b + ' c=' + c);

  var diag = Math.sqrt(a * a + b * b + c * c);

  if (diag < min_tol) {
    console.log('    **Warning** diag=' + diag + ', whereas the min. tolerance is only ' + min_tol);
  }

  console.log('  diag = ' + diag);
  console.log('-----------------');

  return diag;
}

var d1 = getDiag(3, 4, 5);
var d2 = getDiag(0.002, 0.001, 0.003);
