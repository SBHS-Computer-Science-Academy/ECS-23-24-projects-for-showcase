{ pkgs }: {
  deps = [
    pkgs.outils
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}