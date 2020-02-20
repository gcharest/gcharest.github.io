$(document).ready(function () {
  /*Setting parameters based on page lang*/
  const parameters = (pageLang) => {
    var pageLang = document.getElementsByTagName("html")[0].getAttribute('lang');
    var parametersValues = {
      "columnDefs": [{
        "visible": false,
        "targets": groupColumn
      }],
      "order": [
        [groupColumn, 'asc']
      ],
      "displayLength": 25,
      "drawCallback": function (settings) {
        var api = this.api();
        var rows = api.rows({
          page: 'current'
        }).nodes();
        var last = null;

        api.column(groupColumn, {
          page: 'current'
        }).data().each(function (group, i) {
          if (last !== group) {
            $(rows).eq(i).before(
              '<tr class="group"><td colspan="5">' + group + '</td></tr>'
            );

            last = group;
          }
        });
      }
    }
    if (pageLang == 'fr') {
      parametersValues.language = {
        "sEmptyTable": "Aucune donnée disponible dans le tableau",
        "sInfo": "Affichage de l'élément _START_ à _END_ sur _TOTAL_ éléments",
        "sInfoEmpty": "Affichage de l'élément 0 à 0 sur 0 élément",
        "sInfoFiltered": "(filtré à partir de _MAX_ éléments au total)",
        "sInfoPostFix": "",
        "sInfoThousands": ",",
        "sLengthMenu": "Afficher _MENU_ éléments",
        "sLoadingRecords": "Chargement...",
        "sProcessing": "Traitement...",
        "sSearch": "Rechercher :",
        "sZeroRecords": "Aucun élément correspondant trouvé",
        "oPaginate": {
          "sFirst": "Premier",
          "sLast": "Dernier",
          "sNext": "Suivant",
          "sPrevious": "Précédent"
        },
        "oAria": {
          "sSortAscending": ": activer pour trier la colonne par ordre croissant",
          "sSortDescending": ": activer pour trier la colonne par ordre décroissant"
        },
        "select": {
          "rows": {
            "_": "%d lignes sélectionnées",
            "0": "Aucune ligne sélectionnée",
            "1": "1 ligne sélectionnée"
          }
        }
      }
    }
    return parametersValues;
  };
  
  var groupColumn = 3;
  var table = $('#tableFoodFactors').DataTable(parameters());

  // Order by the grouping
  $('#example tbody').on('click', 'tr.group', function () {
    var currentOrder = table.order()[0];
    if (currentOrder[0] === groupColumn && currentOrder[1] === 'asc') {
      table.order([groupColumn, 'desc']).draw();
    } else {
      table.order([groupColumn, 'asc']).draw();
    }
  });
});