var console = console || { "log": function () { } };

        $(function () {

                $("#btnGo").click(function (event) {
                        event.preventDefault();

                        var set = new Array();
                        set.push(parseInt($("#inValue1").val()));
                        set.push(parseInt($("#inValue2").val()));
                        set.push(parseInt($("#inValue3").val()));
                        set.push(parseInt($("#inValue4").val()));

                        $("#result").html("");
                        diffy(set, 0);
                });

                function diffy(set, i) {
                        $("#result").html($("#result").html() + i + " -> " + set.join(", ") + "</br>");

                        if (0 == set[0] && 0 == set[1] && 0 == set[2] && 0 == set[3])
                                return;
                        else {
                                var nextSet = new Array();

                                nextSet.push(Math.abs(set[0] - set[1]));
                                nextSet.push(Math.abs(set[1] - set[2]));
                                nextSet.push(Math.abs(set[2] - set[3]));
                                nextSet.push(Math.abs(set[3] - set[0]));

                                diffy(nextSet, ++i);
                        }
                }
                });
