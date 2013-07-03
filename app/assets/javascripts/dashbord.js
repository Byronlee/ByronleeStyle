$(function () {

    var html ='(● ◡ ●)ﾉ♥ 嗨，欢迎光临！我叫李江华，你想了解我的什么呢？\n用法：\n　　1.　简洁版简历\n　　2.　文艺版简历\n　　3.　github版简历\n　　4.　给我留言\n请输入你想了解的编号：\n'
        var jqconsole = $('#console').jqconsole(html, 'Ξ ~/ByronleeStyle git:(master) ▶ ','baidu');
        var startPrompt = function () {
          // Start the prompt with history enabled.
          jqconsole.Prompt(true, function (input) {
            // Output input with the class jqconsole-output.
	      switch(input)
	      {
	      case "1":
		  window.open("https://gist.github.com/Byronlee/b00a1a24c67f1f6c49d5")
		  break;
	      case "2":
		  window.open("http://resume.github.io/?Byronlee")
		  break;
	      case "3":
		  window.open("http://localhost:3000/dashbord/resume")
	      case "4":
		 
		  break;
	      default:
		  jqconsole.Write(html + '\n', 'jqconsole-output');
	      }

            startPrompt();
          });
        };
    startPrompt();
});
  
