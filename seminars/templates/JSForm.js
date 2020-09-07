document.write(
    "    <script type=\"text/javascript\">\n" +
    "        function responder_validation(form) {\n" +
    "            var inputs = form.getElementsByTagName('input');\n" +
    "            var selects = form.getElementsByTagName('select');\n" +
    "            var filter_email = /^([\\w\\!\\#$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\`{\\|\\}\\~]+\\.)*[\\w\\!\\#$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\`{\\|\\}\\~]+@((((([a-z0-9]{1}[a-z0-9\\-]{0,62}[a-z0-9]{1})|[a-z0-9])\\.)+[a-z]{2,})|(\\d{1,3}\\.){3}\\d{1,3}(\\:\\d{1,5})?)$/i;\n" +
    "            var filter_phone = /^(?:|(?:050|051|052|053|054|055|057|058|02|03|04|08|09)\\d{7,7})$/;\n" +
    "\n" +
    "            var lstSelected = document.getElementById(\"lst_selected\")\n" +
    "            lstSelected.value = document.getElementById(\"example-select\").value\n" +
    "            console.log(lstSelected.value)\n" +
    "\n" +
    "\n" +
    "            for (a=0; a<inputs.length; a++) {\n" +
    "                switch (inputs[a].name) {\n" +
    "                    case 'fields[subscribers_email]':\n" +
    "                        if (!filter_email.test(inputs[a].value)) {\n" +
    "                            alert('כתובת הדוא\"ל אינה חוקית');\n" +
    "                            inputs[a].focus();\n" +
    "                            return false;\n" +
    "                        }\n" +
    "\n" +
    "                        break;\n" +
    "                    case 'fields[subscribers_phone]':\n" +
    "                        var phone = inputs[a].value.replace(/-|\\s/g, '');\n" +
    "                        if (!filter_phone.test(phone.length==0 || phone.charAt(0)=='0' ? phone : '0' + phone)) {\n" +
    "                            alert('מספר הטלפון הנייד אינו חוקי');\n" +
    "                            inputs[a].focus();\n" +
    "                            return false;\n" +
    "                        }\n" +
    "\n" +
    "                        break;\n" +
    "                }\n" +
    "            }\n" +
    "\n" +
    "            for (a=0; a<selects.length; a++) {\n" +
    "                switch (selects[a].name) {\n" +
    "                }\n" +
    "            }\n" +
    "\n" +
    "            if (document.charset)\n" +
    "                form.encoding.value = document.charset;\n" +
    "            else if (document.defaultCharset)\n" +
    "                form.encoding.value = document.defaultCharset;\n" +
    "            else if (document.characterSet)\n" +
    "                form.encoding.value = document.characterSet;\n" +
    "\n" +
    "            if (navigator.userAgent.indexOf(';FBAV/') > -1) {\n" +
    "                form.target = '_self';\n" +
    "            }\n" +
    "\n" +
    "            return true;\n" +
    "        }\n" +
    "\n" +
    "        function get_options(){\n" +
    "            var date = new Date();\n" +
    "            var day = date.getDay();\n" +
    "            var hour = date.getHours();\n" +
    "            var selections = [];\n" +
    "            // monday = 1\n" +
    "            if((day == 0 && hour<20 ) || (day == 2 && hour>20) || (day>2)) {\n" +
    "                var dateTxt = calcDate(day,1)\n" +
    "                selections.push(['שני ('+dateTxt+') בשעה 17:00', '1550511'])\n" +
    "            }\n" +
    "\n" +
    "            // thursday = 4\n" +
    "            if((day == 2 && hour<20 ) || (day == 5 && hour>=10) || !(6>day&&day>1)) {\n" +
    "                var dateTxt = calcDate(day,4)\n" +
    "                selections.push(['חמישי ('+dateTxt+') בשעה 18:00', '1550511'])\n" +
    "            }\n" +
    "\n" +
    "\n" +
    "            // saturday = 6\n" +
    "            if((day == 5 && hour<10 ) || (day == 0 && hour>20) || (5>day>1)) {\n" +
    "                var dateTxt = calcDate(day,6)\n" +
    "                selections.push(['מוצ\"ש ('+dateTxt+') בשעה 20:00', '1550511'])\n" +
    "            }\n" +
    "\n" +
    "            return selections\n" +
    "        }\n" +
    "\n" +
    "        function calcDate(today,target){\n" +
    "\n" +
    "            var futureDate = new Date();\n" +
    "            var daysDis;\n" +
    "            if(today>target){\n" +
    "                daysDis = 7 - (today-target);\n" +
    "            }\n" +
    "            else {\n" +
    "                daysDis = target - today;\n" +
    "            }\n" +
    "\n" +
    "            futureDate.setDate(futureDate.getDate() + daysDis);\n" +
    "            var dateTxt = futureDate.getDate()+'.'+ (futureDate.getMonth()+1) // month count starts from 0\n" +
    "\n" +
    "            return dateTxt\n" +
    "\n" +
    "        }\n" +
    "\n" +
    "\n" +
    "    </script>\n" +
    "\n" +
    "    <style>\n" +
    "        body {\n" +
    "            text-align: center;\n" +
    "\n" +
    "\n" +
    "        }\n" +
    "        form{\n" +
    "            padding: 10px;\n" +
    "            display: inline-block;\n" +
    "            direction: rtl;\n" +
    "            font-family: \"Segoe UI\";\n" +
    "        }\n" +
    "        table{\n" +
    "            display: inline-block;\n" +
    "\n" +
    "        }\n" +
    "\n" +
    "        input,select, button{\n" +
    "            padding: 10px;\n" +
    "            margin: 1%;\n" +
    "            width: 100%;\n" +
    "            min-width:380px;\n" +
    "            max-width: 500px;\n" +
    "            display: inline-block;\n" +
    "            font-family: \"Segoe UI\";\n" +
    "            border-radius: 5px;\n" +
    "            border: 0.1px solid lightgrey;\n" +
    "            box-shadow:inset 0 2px 3px #F0F0F0, 2px 2px 2px #F0F0F0 ;\n" +
    "        }\n" +
    "        @media (min-width: 320px) and (max-width: 480px) {\n" +
    "\n" +
    "            input,select, button{\n" +
    "                padding: 10px;\n" +
    "                margin: 1%;\n" +
    "                width: 100%;\n" +
    "                min-width:300px;\n" +
    "\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        select{\n" +
    "            font-weight: bold;\n" +
    "        }\n" +
    "\n" +
    "        .submit-btn{\n" +
    "            background-color: limegreen;\n" +
    "            color: white;\n" +
    "            font-size: 2.9vw;\n" +
    "            font-weight: bold;\n" +
    "            box-shadow: inset 0 0px 0px #F0F0F0, 2px 2px 2px #F0F0F0;\n" +
    "\n" +
    "        }\n" +
    "        @media (min-width: 1025px){\n" +
    "            .submit-btn{\n" +
    "                font-size: 42px;\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        .step2{\n" +
    "            display: none;\n" +
    "        }\n" +
    "\n" +
    "        td input.invalid {\n" +
    "            background-color: #ffdddd;\n" +
    "        }\n" +
    "\n" +
    "        .hide{\n" +
    "            display: none;\n" +
    "        }\n" +
    "        .bold-red{\n" +
    "            font-size: 2vw;\n" +
    "            color: red;\n" +
    "            font-weight: bold;\n" +
    "        }\n" +
    "        .bold{\n" +
    "            font-size: 3vw;\n" +
    "            font-weight: bold;\n" +
    "        }\n" +
    "        label{\n" +
    "            font-size: 2vw;\n" +
    "            font-weight: normal;\n" +
    "        }\n" +
    "\n" +
    "        /*\n" +
    "          ##Device = Laptops, Desktops\n" +
    "          ##Screen = B/w 1025px to 1280px\n" +
    "        */\n" +
    "        @media (min-width: 1025px)  {\n" +
    "\n" +
    "            .bold-red{\n" +
    "                font-size: 24px;\n" +
    "                color: red;\n" +
    "                font-weight: bold;\n" +
    "            }\n" +
    "            .bold{\n" +
    "                font-size: 24px;\n" +
    "                font-weight: bold;\n" +
    "            }\n" +
    "            label{\n" +
    "                font-size: 18px;\n" +
    "                font-weight: normal;\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @media (min-width: 320px) and (max-width: 480px) {\n" +
    "\n" +
    "            .bold-red{\n" +
    "                font-size: 3.7vw;\n" +
    "            }\n" +
    "            .bold{\n" +
    "                font-size: 3.7vw;\n" +
    "            }\n" +
    "            label{\n" +
    "                font-size: 3vw;\n" +
    "            }\n" +
    "\n" +
    "        }\n" +
    "\n" +
    "\n" +
    "    </style>\n" +
    "    <form method=\"post\" action=\"https://subscribe.responder.co.il\" onsubmit=\"return responder_validation(this);\">\n" +
    "<!--        text for step 1        -->\n" +
    "        <p class=\"step1 bold\">מועבר באינטרנט - כל מה שצריך זה לבחור תאריך:</p>\n" +
    "<!--        text for step 2        -->\n" +
    "        <p class=\"step2 bold-red\">לאן לשלוח לך את קישור הכניסה לסמינר?</p>\n" +
    "        <table border=\"0\" dir=\"rtl\">\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td><select id=\"example-select\" class=\"step1\"></select></td>\n" +
    "                    <script>\n" +
    "                        var select = document.getElementById(\"example-select\");\n" +
    "                        var options = get_options()\n" +
    "                        options.forEach(op=> {\n" +
    "                            select.options[select.options.length] = new Option(op[0], op[1]);\n" +
    "                        })\n" +
    "\n" +
    "                    </script>\n" +
    "\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td><input id=\"name\" class=\"step1\" type=\"text\" name=\"fields[subscribers_name]\"  dir=\"rtl\" placeholder=\"שם\"/></td>\n" +
    "                </tr>\n" +
    "\n" +
    "                <tr>\n" +
    "                    <td><button type=\"button\" id=\"nextBtn\" class=\"step1 submit-btn\" onclick=\"validateStep1()\">המשך &#8592;</button></td>\n" +
    "                </tr>\n" +
    "\n" +
    "\n" +
    "                <tr>\n" +
    "                    <td><input id=\"email\" class=\"step2\" type=\"text\" name=\"fields[subscribers_email]\"  dir=\"ltr\" placeholder=\"דואר אלקטרוני\" /></td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td><input id=\"phone\" class=\"step2\" type=\"text\" name=\"fields[subscribers_phone]\"  dir=\"ltr\" placeholder=\"טלפון נייד\"/></td>\n" +
    "                </tr>\n" +
    "\n" +
    "                <tr>\n" +
    "                    <td colspan=\"2\">\n" +
    "                        <input type=\"hidden\" name=\"form_id\" id=\"lst_selected\" />\n" +
    "                        <input type=\"hidden\" name=\"encoding\" value=\"\" />\n" +
    "                        <input id=\"submit-btn\" class=\"step2 submit-btn\" type=\"submit\" value=\"לחץ כאן להרשמה\" />\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <input type=\"checkbox\" class=\"step2\" name=\"vehicle1\" value=\"check\" checked required> <br>\n" +
    "                        <label for=\"vehicle1\"  class=\"step2\"> כן, אני מבין שעל מנת להיות נוכח בסמינר עליי לאשר קבלת מיילים וסמסים לגישה לשידור ותכנים נוספים.</label><br>\n" +
    "                        <!--        text for step 2        -->\n" +
    "                        <p class=\"step2 bold-red\">חשוב - מספר המקומות מוגבל ל-501 נרשמים. קישור לכניסה יגיע במייל, אז חשוב להכניס אחד תקין :)</p>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "\n" +
    "            <script>\n" +
    "                var currentStep = 1; // Current tab is set to be the first tab (1)\n" +
    "                showSteps(currentStep)\n" +
    "\n" +
    "                function showSteps(step){\n" +
    "                    if(step == 1) {\n" +
    "                        var x = document.getElementsByClassName(\"step1\");\n" +
    "                        for (i = 0; i < x.length; i++){\n" +
    "                            x[i].style.display = \"block\";\n" +
    "                        }\n" +
    "                    }\n" +
    "                    else {\n" +
    "                        var x = document.getElementsByClassName(\"step1\");\n" +
    "                        for (i = 0; i < x.length; i++){\n" +
    "                            x[i].style.display = \"none\";\n" +
    "                        }\n" +
    "                        var y = document.getElementsByClassName(\"step2\");\n" +
    "                        for (i = 0; i < y.length; i++){\n" +
    "                            y[i].style.display = \"block\";\n" +
    "                        }\n" +
    "                    }\n" +
    "                }\n" +
    "\n" +
    "                function validateStep1() {\n" +
    "                    // This function deals with validation of the form fields\n" +
    "                    var x, y, i, valid = true;\n" +
    "                    // y = document.getElementsByClassName(\"step\"+currentStep);\n" +
    "                    y = document.getElementById(\"name\");\n" +
    "                        if (y.value == \"\") {\n" +
    "                            alert('יש למלא שם לפני המשך ההרשמה');\n" +
    "                            // and set the current valid status to false:\n" +
    "                            valid = false;\n" +
    "                        }\n" +
    "\n" +
    "                    // If the valid status is true, mark the step as finished and valid:\n" +
    "                    if (valid) {\n" +
    "                        currentStep += 1;\n" +
    "                        showSteps(2)\n" +
    "                    }\n" +
    "                    return valid; // return the valid status\n" +
    "                }\n" +
    "            </script>\n" +
    "        </table>\n" +
    "    </form>\n" +
    "\n" +

    "\n" +
    "\n" +
    "\n");