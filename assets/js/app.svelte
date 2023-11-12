<html>
    <html lang="en"></html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/introduction.css">

    <title>🦁 Lion's Project™</title>
</head>
<body>
    <nav>
        <div class="left">
            <a href="/">🦁 Lion's Project™</a>
          </div>
        </div>
        <div class="right">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
            <span>Instagram</span>
          </a>
          
          <a href="http://discord.gg/qMVEyW2Teq" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-discord"></i>
            <span>Discord</span>
          </a>
        </div>
      </nav>
    </nav>
    <main>
      <script>
        import { createText } from 'svelte/text';
      
        export let text = "Společně budujeme budoucnost, kde odvaha a odhodlání vedou k úspěchu. Přidejte se k nám a buďte součástí této nekonečné cesty za změnou.";
      
        const span = createText(text);
      
        span.style.transition = "all 2s ease-in-out";
        span.style.opacity = 0;
      
        span.onmouseover(() => {
          span.style.opacity = 1;
        });
      
        const writeText = () => {
          let i = 0;
      
          const interval = setInterval(() => {
            if (i >= text.length) {
              clearInterval(interval);
              return;
            }
      
            span.textContent = text.slice(0, i + 1);
            i++;
          }, 100);
        };
      
        $: writeText();
      </script>
      
      <div class="text">
        <span bind:this={span} />
      </div>
      <section>
        <section class="introduction">
          <div class="text">
            <h2>We are 🦁 Lion's Project</h2>
            <Text text={text} />
          </div>
        </section>
      </section>
    </main>
</body>
</html>