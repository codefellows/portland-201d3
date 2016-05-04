# Learning Advice
Advice for success in this course and in your future career as a software engineer:

- Invest in YOURSELF

  - Read about coding, then **SANDBOX**
    - Interactive sandbox demo

  - Look up *terminology*. Get good at "code speak".
    - Demo

          var min_tol = 0.005; // Minimum tolerance

          function getDiag(a, b, c) { // Get 3-D diagonal length
            console.log('  Entered getDiag(): a=' + a + ' b=' + b + ' c=' + c);

            var diag = Math.sqrt(a*a + b*b + c*c);

            if (diag < min_tol) {
               console.log('    **Warning** diag=' + diag + ', whereas the min. tolerance is only ' + min_tol);
            }

            console.log('  diag = ' + diag);
            console.log('-----------------');

            return diag;
          }

          var d1 = getDiag(3, 4, 5);
          var d2 = getDiag(0.002, 0.001, 0.003);

  - Find manual pages, and again, **sandbox**.

  - Find example code, **analyze** the code, then sandbox.

  - Get best-of-breed development tools. Efficiency is very very important.
    Get so *fast* with tools that your *thinking speed* is the only speed limit left in you.
    - Text editor
    - Debugger
    - Shell (command line)
      - File/folder nav/management
      - Commands
      - Aliases
      - Symlinks
      - Shell scripts

  - "Pay up-front **once**, enjoy benefits forever."

- Invest in your team collaboration skills
  - Pair/mob code
  - Team projects
  - Ask peers and staff for help.
  - Offer to collaborate; help debug
  - Write open source
  - Do hack-a-thons
