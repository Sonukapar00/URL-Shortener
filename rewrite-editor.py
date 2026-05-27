import os
import sys

mapping = {
    '305b57f907e93963a52e081d51476d63b90e6a2f': 'Initialize URL shortener repository',
    '5643da293d4da4ac68bb5a6ed7c8320d96343e9a': 'Add initial URL shortener app scaffolding',
    'dc9def0a45c3e8f7ff1498e0cc13c25f8d184f72': 'Document architecture and project requirements',
    '01c381a5b7c1867928f6d76ecad72f106d2e1b33': 'Improve README and setup documentation',
    'f71a871a7395c5a0f5d357282694d9aa50f61225': 'Enhance README presentation and developer guidance',
    '6fb35c6bade785a91f180a1a32d21640da1d4a06': 'Update .gitignore and content hygiene',
    '51e67e1f9bb06ab4c37e7e7f6f5589b5727a1abd': 'Refactor repository structure and add professional documentation',
}

path = sys.argv[1]
commit = os.environ.get('GIT_COMMIT')

if commit in mapping:
    message = mapping[commit] + '\n'
    with open(path, 'w', encoding='utf-8') as handle:
        handle.write(message)
else:
    # Preserve existing message if not mapped
    with open(path, 'r', encoding='utf-8') as handle:
        message = handle.read()
    with open(path, 'w', encoding='utf-8') as handle:
        handle.write(message)
