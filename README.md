cy-network-widget
===============================

Cytoscape network renderer

Installation
------------

To install use pip:

    $ pip install cynetworkwidget
    $ jupyter nbextension enable --py --sys-prefix cynetworkwidget


For a development installation (requires npm),

    $ git clone https://github.com/idekerlab/cy-network-widget.git
    $ cd cy-network-widget
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --user cynetworkwidget
    $ jupyter nbextension enable --py --user cynetworkwidget
