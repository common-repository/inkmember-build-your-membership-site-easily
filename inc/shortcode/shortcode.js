(function () {    tinymce.PluginManager.add('inkmember_buttons', function (editor, url) {        editor.addButton('inkmember_buttons', {            text: '',            icon: 'inkmember',            type: 'button',            title:'InkMember Button',            onclick: function () {                editor.windowManager.open({                    title: 'Membership',                    body: [                        {                            type: 'textbox',                            name: 'membertype',                            label: 'Enter Membership Id:',                            title: '30'                        },                    ],                    onsubmit: function (e) {                        var selectedContent = tinyMCE.activeEditor.selection.getContent();                        //var edata = JSON.stringify(e.data);                        //alert(edata);                        editor.insertContent('[private_content id="' + e.data.membertype + '"]' + selectedContent + '[/private_content]');                    }                });            }        });    });})();